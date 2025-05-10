import Swiper from '../components/pages/Home/Swiper';
import HomeCards from '../components/pages/Home/HomeInfoCards';
// import HomeNews from '../components/pages/Home/HomeNews';
import Subscribe from '../components/pages/Home/Subscribe';

import HomeFeedSection from '../components/pages/Home/HomeFeedSection';
import news from '../firebase/news.json'
import events from '../firebase/events.json'

export default function HomePage() {
    return (
        <div className="home__wrapper">
            <Swiper className="home" />
            <HomeCards className="home" />
            <HomeFeedSection className="home" type="news" data={news}/>
            <Subscribe className="home" />
            <HomeFeedSection className="home" type="events" data={events}/>
        </div>
    )
}