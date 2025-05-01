import Swiper from '../components/pages/Home/Swiper';
import HomeCards from '../components/pages/Home/HomeInfoCards';
import HomeNews from '../components/pages/Home/HomeNews';

export default function HomePage() {

    return (
        <div className="home__wrapper">
            <Swiper className="home" />
            <HomeCards className="home" />
            <HomeNews className="home" />
        </div>
    )
}