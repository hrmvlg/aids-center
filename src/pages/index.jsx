import Swiper from '../components/pages/Home/Swiper';
import HomeCardsSection from '../components/pages/Home/HomeCardsSection';

export default function HomePage() {

    return (
        <div className="home-page__wrapper">
            <Swiper className="home-page__swiper"/>
            <HomeCardsSection className="home-page__cards" />
        </div>
    )
}