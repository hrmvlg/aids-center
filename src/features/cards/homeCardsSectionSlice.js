import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';

export const fetchHomeCards = createAsyncThunk(
    'homeCardsSection/fetchHomeCards',
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

const homeCardsSectionSlice = createSlice({
    name: 'homeCardsSection',
    initialState: {
        homeCards: [],
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeCards.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchHomeCards.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.homeCards = action.payload;
            })
            .addCase(fetchHomeCards.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default homeCardsSectionSlice.reducer;