import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../../features/news/newsSectionSlice';
import { Link } from 'react-router';
import HomeNewsCard from '../../Cards/HomeNewsCard';
import '../../../firebase/news.json'

export default function HomeNews({ className }) {
    const dispatch = useDispatch();
    const { news, status, error } = useSelector((state) => state.newsSection);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchNews());
        }
    }, [status, dispatch]);

    // if (status === 'loading') return console.log("Загрузка новостей...");
    // if (status === 'failed') return console.log(`Ошибка: ${error}`);

    return (
        <div className={`${className}__news home-news`}>
            <h3 className="home-news__title">Новости</h3>
            <div className="home-news__cards">
                {news.length > 0 && (
                    news.map((item) => (
                        <HomeNewsCard key={item.id} {...item} />
                    ))
                )}
            </div>
            <Link to="/news" className="home-news__link">Все новости</Link>
        </div >
    );
}