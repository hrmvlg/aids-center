/* eslint-disable react/prop-types */
import { Link } from "react-router";
import Button from "../common/Button/Button";

export default function HomeInfoCard({ title, subtitle, iconUrl, path, className }) {

    const iconPath = new URL(`../../assets/icons/${iconUrl}`, import.meta.url).href;

    return (
        <article className={`${className}`}>
            <header className="info-card__text-container">
                <h2 className="info-card__title">{title}</h2>
                <p className="info-card__subtitle" dangerouslySetInnerHTML={{ __html: subtitle.replace(/\n/g, '<br/>') }}></p>
            </header>
            <footer className="info-card__bottom-container">
                <figure className="info-card__image-container">
                    <img className="info-card__image" src={iconPath} alt={title} />
                </figure>
                <div className="info-card__button-container">
                    <Link to={path}>
                        <Button parentClass={"info-card"} value={"Подробнее"} />
                    </Link>
                </div>
            </footer>
        </article>
    );
}