import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import RightArrow from '../../assets/icons/right-arrow-circle-icon.svg?react';
import LeftArrow from '../../assets/icons/left-arrow-circle-icon.svg?react';
import Button from '../common/Button/Button';

const banners = [
    {
        id: 1,
        title: 'Сдай тест на ВИЧ  уже сегодня',
        description: 'Анонимный экспресс тест в центре',
        url: 'src/assets/banners/banner-1.png',
        buttonValue: 'Подробнее',
        path: '/profile',
    },
    {
        id: 2,
        title: 'Узнай о профилактике ВИЧ инфекции и PReP',
        description: 'Подробная статья на нашем сайте',
        url: 'src/assets/banners/banner-2.png',
        buttonValue: 'Подробнее',
        path: '/prevention',
    },
    {
        id: 3,
        title: 'Как передаётся ВИЧ? И как не передаётся?',
        description: 'Всё о передаче ВИЧ в нашей статье',
        url: 'src/assets/banners/banner-3.png',
        buttonValue: 'Подробнее',
        path: '/transmission',
    },
    {
        id: 4,
        title: 'Будьте в курсе событий Читайте наши новости',
        description: 'Новости из медицинского мира',
        url: 'src/assets/banners/banner-4.png',
        buttonValue: 'Читать',
        path: 'news',
    },
];

const Swiper = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? banners.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000); // Смена слайда каждые 5 сек
        return () => clearInterval(timer);
    }, []);

    function fixWidows(text) {
        return text.replace(/\s(в|с|о|и|а|на|В|С|О|И|А|На)\s/gu, '&#032;$1&nbsp;');
    }

    return (
        <div
            className="swiper"
            style={{ backgroundImage: `url(${banners[currentIndex].url})` }}
        >
            <h1 className="swiper__title" dangerouslySetInnerHTML={{ __html: fixWidows(banners[currentIndex].title) }}></h1>
            <p className="swiper__description">{banners[currentIndex].description}</p>
            <Link to={`${banners[currentIndex].path}`}>
                <Button parentClass={"swiper"} value={`${banners[currentIndex].buttonValue}`} />
            </Link>
            <div className="swiper__controls">
                <button className="swiper__arrow swiper__arrow--left" onClick={prevSlide}>
                    <LeftArrow />
                </button>
                <div className="swiper__indicators">
                    {banners.map((_, index) => (
                        <span
                            key={index}
                            className={`swiper__indicator ${index === currentIndex ? 'swiper__indicator--active' : ''
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
                <button className="swiper__arrow swiper__arrow--right" onClick={nextSlide}>
                    <RightArrow />
                </button>
            </div>
        </div>
    );
};

export default Swiper;