import { Link } from 'react-router';
import HomeFeedCard from '../../Cards/HomeFeedCard';
import '../../../firebase/news.json'

export default function HomeFeedSection({ className, type, data }) {

    return (
        data && (
            <div className={`${className}__feed home-feed`}>
                <h3 className="home-feed__title">
                    {type === "news" ? "Новости" : "Мероприятия"}
                </h3>
                <div className="home-feed__cards">
                    {data.length > 0 && (
                        data.map((item, index) => (
                            <HomeFeedCard key={index} id={index} {...item} type={type} />
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