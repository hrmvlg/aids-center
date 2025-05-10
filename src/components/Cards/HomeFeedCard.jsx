/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export default function HomeFeedCard({ type, ...props }) {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const parts = new Intl.DateTimeFormat('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }).formatToParts(date);

        const day = parts.find(part => part.type === 'day')?.value;
        const month = parts.find(part => part.type === 'month')?.value;

        if (type === "news") {
            const year = parts.find(part => part.type === 'year')?.value;
            return `${day} ${month} ${year}`;
        }

        if (type === "events") {
            const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            return `${day} ${month} ${time}`;
        }
    };

    if (type === "news") {
        const { id,
            title,
            content,
            image,
            publishedAt
        } = props;
        return (
            <article className="home-feed-card" aria-labelledby={id}>
                <Link
                    to={`/news/${encodeURIComponent(`${title}${publishedAt}`)}`}
                    className="home-feed-card__link"
                    aria-label={`Читать больше о: ${title}`}
                >
                    <div className="home-feed-card__image-wrapper">
                        <img
                            src={image}
                            alt={title || "Новостное изображение"}
                            className="home-feed-card__image"
                            width={547}
                            height={244}
                        />
                    </div>
                    <div className="home-feed-card__content">
                        <header className="home-feed-card__header">
                            <h4 id={id} className="home-feed-card__title">
                                {title}
                            </h4>
                        </header>
                        <p className="home-feed-card__description">{content}</p>
                        <time
                            className="home-feed-card__date"
                            dateTime={publishedAt}
                        >
                            <span className="visually-hidden">Опубликовано:</span> {formatDate(publishedAt)}
                        </time>
                    </div>
                </Link>
            </article>
        )
    }

    if (type === "events") {
        const {
            id,
            title,
            image,
            short_description,
            details: { date },
        } = props;

        return (
            <article className="home-feed-card" aria-labelledby={id}>
                <Link
                    to={`/event/${encodeURIComponent(`${title}${date}`)}`}
                    className="home-feed-card__link"
                    aria-label={`Читать больше о: ${title}`}
                >
                    <div className="home-feed-card__image-wrapper">
                        <img
                            // FIXME заменить путь
                            src={`src/assets/events/${image}`}
                            alt={title || "Изображение мероприятия"}
                            className="home-feed-card__image"
                            width={547}
                            height={244}
                        />
                    </div>
                    <div className="home-feed-card__content">
                        <header className="home-feed-card__header">
                            <h4 id={id} className="home-feed-card__title">
                                {title}
                            </h4>
                        </header>
                        <p className="home-feed-card__short-description">{short_description}</p>
                        {/* TODO сделать отступы как в макете */}
                        <time
                            className="home-feed-card__date"
                            dateTime={date}
                        >
                            <span className="visually-hidden">Дата мероприятия:</span> {formatDate(date)}
                        </time>
                    </div>
                </Link>
            </article>
        )
    }
}