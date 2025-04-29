import { Link } from "react-router";
import Button from "../common/Button/Button";

export default function Card({ title, subtitle, iconUrl, path }) {

    const iconPath = new URL(`../../assets/icons/${iconUrl}`, import.meta.url).href;

    return (
        <article className="card">
            <header className="card__text-container">
                <h2 className="card__title">{title}</h2>
                <p className="card__subtitle" dangerouslySetInnerHTML={{ __html: subtitle.replace(/\n/g, '<br/>') }}></p>
            </header>
            <footer className="card__bottom-container">
                <figure className="card__image-container">
                    <img className="card__image" src={iconPath} alt={title} />
                </figure>
                <div className="card__button-container">
                    <Link to={path}>
                        <Button parentClass={"card"} value={"Подробнее"} />
                    </Link>
                </div>
            </footer>
        </article>
    );
}