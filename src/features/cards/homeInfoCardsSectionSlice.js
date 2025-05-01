import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';

export const fetchHomeInfoCards = createAsyncThunk(
    'homeInfoCards/fetchHomeInfoCards',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'homePageCards'));
            return querySnapshot.docs.map(
                doc => ({ id: doc.id, ...doc.data() })
            );
        } catch (error) {
            throw new Error(`Ошибка при загрузке карточек: ${error.message}`);
        }
    });

const homeInfoCardsSlice = createSlice({
    name: 'homeInfoCards',
    initialState: {
        homeInfoCards: [],
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeInfoCards.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchHomeInfoCards.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.homeInfoCards = action.payload;
            })
            .addCase(fetchHomeInfoCards.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default homeInfoCardsSlice.reducer;