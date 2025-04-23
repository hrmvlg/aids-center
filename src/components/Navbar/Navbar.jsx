import { Link } from "react-router";

export default function Navbar() {

    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item">
                    <Link to="/contacts" className="navbar__link link">Контакты</Link>
                </li>
                <li className="navbar__item">
                    <Link to="/life-with-aids" className="navbar__link link">Жизнь с ВИЧ</Link>
                </li>
                <li className="navbar__item">
                    <Link to="/news" className="navbar__link link">Новости</Link>
                </li>
                <li className="navbar__item">
                    <Link to="/events" className="navbar__link link">Мероприятия</Link>
                </li>
            </ul>
        </nav>
    )
}