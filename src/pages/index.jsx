import Swiper from '../components/pages/Home/Swiper';
import HomeCards from '../components/pages/Home/HomeInfoCards';
import Subscribe from '../components/pages/Home/Subscribe';
import HomeFeedSection from '../components/pages/Home/HomeFeedSection';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchEvents } from '../features/events/eventsSectionSlice';
import { fetchNews } from '../features/news/newsSectionSlice';

export default function HomePage() {

    const dispatch = useDispatch();

    const {
        events,
        status: eventsStatus,
    } = useSelector((state) => state.eventsSection);

    const {
        news,
        status: newsStatus,
    } = useSelector((state) => state.newsSection);

    useEffect(() => {
        if (eventsStatus === 'idle') {
            dispatch(fetchEvents());
        }
    }, [eventsStatus, dispatch]);

    useEffect(() => {
        if (newsStatus === 'idle') {
            dispatch(fetchNews());
        }
    }, [newsStatus, dispatch]);

    return (
        <div className="home__wrapper">
            <Swiper className="home" />
            <HomeCards className="home" />
            <HomeFeedSection className="home" type="news" data={news} />
            <Subscribe className="home" />
            <HomeFeedSection className="home" type="events" data={events} />
        </div>
    )
}