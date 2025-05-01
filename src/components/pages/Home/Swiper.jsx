import { useEffect } from 'react';
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSwiperCards, nextSlide, prevSlide, setCurrentIndex, setIsTablet } from '../../../features/cards/swiperCardsSlice';
import Button from '../../common/Button/Button';
import LeftArrow from '../../../assets/icons/left-arrow-circle-icon.svg?react';
import RightArrow from '../../../assets/icons/right-arrow-circle-icon.svg?react';

export default function Swiper({ className }) {

    const dispatch = useDispatch();
    const {
        swiperCards,
        currentIndex,
        isTablet,
        status,
        error
    } = useSelector((state) => state.swiper);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchSwiperCards());
        }
    }, [status, dispatch]);

    useEffect(() => {
        const handleResize = () => { dispatch(setIsTablet()) };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [dispatch]);

    useEffect(() => {
        const timer = setInterval(() => dispatch(nextSlide()), 6000); // Смена слайда каждые 6 сек
        return () => clearInterval(timer);
    }, [dispatch])

    // if (status === 'loading') return console.log("Загрузка...");
    if (status === 'failed') return console.log(`Ошибка: ${error}`);

    return (
        swiperCards.length > 0 && (
            <div
                className={`${className}__swiper swiper`}
                style={{
                    backgroundImage: isTablet ? 'none' : `url(${swiperCards[currentIndex].url})`,
                    backgroundColor: `${swiperCards[currentIndex].backgroundColor}`,
                }}
            >
                <div className="swiper__wrapper">
                    <h1 className="swiper__title" dangerouslySetInnerHTML={{ __html: swiperCards[currentIndex].title.replace(/\n/g, '<br/>') }}></h1>
                    <p className="swiper__description">{swiperCards[currentIndex].description}</p>
                    <Link to={`${swiperCards[currentIndex].path}`}>
                        <Button parentClass={"swiper"} value={`${swiperCards[currentIndex].buttonValue}`} />
                    </Link>
                    <div className="swiper__controls">
                        <button className="swiper__arrow swiper__arrow--left" onClick={() => dispatch(prevSlide())}>
                            <LeftArrow />
                        </button>
                        <div className="swiper__indicators">
                            {swiperCards.map((_, index) => (
                                <span
                                    key={index}
                                    className={`swiper__indicator ${index === currentIndex ? 'swiper__indicator--active' : ''
                                        }`}
                                    onClick={() => dispatch(setCurrentIndex(index))}
                                ></span>
                            ))}
                        </div>
                        <button className="swiper__arrow swiper__arrow--right" onClick={() => dispatch(nextSlide())}>
                            <RightArrow />
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}