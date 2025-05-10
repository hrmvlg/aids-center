import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import HomeNewsCard from '../../Cards/HomeNewsCard';
import '../../../firebase/news.json'

//import newsJSON from '../../../firebase/news.json';

export default function HomeFeedSection({ className, type, data }) {

    // TODO настроить иморт данных через Redux

    const [feedData, setFeedData] = useState([]);
    useEffect(() => {
        setFeedData(data.articles);
    }, []);

    return (
        data && (
            <div className={`${className}__feed home-feed`}>
                <h3 className="home-feed__title">
                    {type === "news" ? "Новости" : "Мероприятия"}
                </h3>
                <div className="home-feed__cards">
                    {feedData.length > 0 && (
                        feedData.map((item, index) => (
                            <HomeNewsCard key={index} id={index} {...item} type={type} />
                        ))
                    )}
                </div>
                <Link
                    to={type === "news" ? "/news" : "/events"}
                    className="home-feed__link"
                >
                    Все {type === "news" ? "новости" : "мероприятия"}
                </Link>
            </div >
        )
    );
}