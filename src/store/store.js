import { configureStore } from '@reduxjs/toolkit';
import swiperReducer from '../features/cards/swiperCardsSlice';
import homeInfoCardsReducer from '../features/cards/homeInfoCardsSectionSlice';
import newsSectionReducer from '../features/news/newsSectionSlice';

const store = configureStore({
    reducer: {
        swiper: swiperReducer,
        homeInfoCards: homeInfoCardsReducer,
        newsSection: newsSectionReducer,
    },
});

export default store;