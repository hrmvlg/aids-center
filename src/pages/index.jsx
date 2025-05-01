import Swiper from '../components/pages/Home/Swiper';
import HomeCardSection from '../components/pages/Home/HomeCardSection';

export default function HomePage() {

    return (
        <div className="home-page__wrapper">
            <Swiper className="home-page__swiper"/>
            <HomeCardSection className="home-page__cards" />
        </div>
    )
}