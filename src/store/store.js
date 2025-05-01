import { configureStore } from '@reduxjs/toolkit';
import swiperReducer from '../features/cards/swiperCardsSlice';

const store = configureStore({
    reducer: {
        swiper: swiperReducer,
    },
});

export default store;