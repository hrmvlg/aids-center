import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';

export const fetchSwiperCards = createAsyncThunk(
    'swiper/fetchSwiperCards',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'swiperCards'));
            return querySnapshot.docs.map(
                doc => ({ ...doc.data() })
            );
        } catch (error) {
            console.log("Ошибка при загрузки данных", error);
        }
    }
);

const swiperSlice = createSlice({
    name: "swiper",
    initialState: {
        swiperCards: [],
        currentIndex: 0,
        isTablet: window.innerWidth < 768,
        status: 'idle',
        error: null
    },
    reducers: {
        nextSlide(state) {
            state.currentIndex = (state.currentIndex + 1) % state.swiperCards.length;
        },
        prevSlide(state) {
            state.currentIndex = (state.currentIndex === 0 ? state.swiperCards.length - 1 : state.currentIndex - 1);
        },
        setIsTablet(state) {
            state.isTablet = window.innerWidth < 768;
        },
        setCurrentIndex(state, action) {
            state.currentIndex = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSwiperCards.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSwiperCards.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.swiperCards = action.payload;
            })
            .addCase(fetchSwiperCards.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});


export const { nextSlide, prevSlide, setIsTablet, setCurrentIndex } = swiperSlice.actions;

export default swiperSlice.reducer;