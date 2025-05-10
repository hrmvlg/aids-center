import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';

export const fetchEvents = createAsyncThunk(
    'events/fetchEvents',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'events'));
            return querySnapshot.docs.map(
                doc => ({ id: doc.id, ...doc.data() })
            );
        } catch (error) {
            throw new Error(`Ошибка при загрузке мероприятий: ${error.message}`);
        }
    });

const eventsSectionSlice = createSlice({
    name: 'events',
    initialState: {
        events: [],
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvents.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.events = action.payload;
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default eventsSectionSlice.reducer;