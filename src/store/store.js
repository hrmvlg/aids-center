import { configureStore } from '@reduxjs/toolkit';
import swiperReducer from '../features/cards/swiperCardsSlice';
import homeInfoCardsReducer from '../features/cards/homeInfoCardsSectionSlice';
import newsSectionReducer from '../features/news/newsSectionSlice';
import eventsSectionReducer from '../features/events/eventsSectionSlice'

const store = configureStore({
    reducer: {
        swiper: swiperReducer,
        homeInfoCards: homeInfoCardsReducer,
        newsSection: newsSectionReducer,
        eventsSection: eventsSectionReducer,
    },
});

export default store;