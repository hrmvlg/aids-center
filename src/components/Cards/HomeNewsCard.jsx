import { Link } from 'react-router-dom';

export default function HomeNewsCard({ id, title, content, image, publishedAt }) {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const parts = new Intl.DateTimeFormat('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }).formatToParts(date);

        const day = parts.find(part => part.type === 'day')?.value;
        const month = parts.find(part => part.type === 'month')?.value;
        const year = parts.find(part => part.type === 'year')?.value;

        return `${day} ${month} ${year}`;
    };

    return (
        <article className="home-news-card" aria-labelledby={id}>
            <Link to={`/news/${encodeURIComponent(`${title}${publishedAt}`)}`} className="home-news-card__link" aria-label={`Читать больше о: ${title}`}>
                <div className="home-news-card__image-wrapper">
                    <img
                        src={image}
                        alt={title || "Новостное изображение"}
                        className="home-news-card__image"
                        width={547}
                        height={244}
                    />
                </div>
                <div className="home-news-card__content">
                    <header className="home-news-card__header">
                        <h4 id={id} className="home-news-card__title">{title}</h4>
                    </header>
                    <p className="home-news-card__description">{content}</p>
                    <time
                        className="home-news-card__date"
                        dateTime={publishedAt}
                    >
                        <span className="visually-hidden">Опубликовано:</span> {formatDate(publishedAt)}
                    </time>
                </div>
            </Link>
        </article>
    )
}