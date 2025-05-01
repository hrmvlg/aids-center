import { configureStore } from '@reduxjs/toolkit';
import swiperReducer from '../features/cards/swiperCardsSlice';
import homeCardsSectionReducer from '../features/cards/homeCardsSectionSlice'

const store = configureStore({
    reducer: {
        swiper: swiperReducer,
        homeCardsSection: homeCardsSectionReducer,
    },
});

export default store;