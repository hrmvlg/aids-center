import Button from "../Button/Button";
import Search from "../Search/Search";
import LogoIcon from "../../assets/icons/hiv-ind-logo.svg?react";
import { Link } from "react-router";

export default function Header() {
    return (
        <header className="header">
            <Link to='/'>
                <div className="header__logo-wrapper">
                    <span className="header__logo-text">ВИЧ.Центр</span>
                    <LogoIcon className="header__logo" />
                </div>
            </Link>

            <div className="header__contacts">
                <a className="header__contacts-link link" href='tel:+78125124797'>
                    +7 (812) 512-47-97
                </a>
                <span className="header__contacts-work-hours">
                    Работаем с 9:00 до 18:00
                </span>
            </div>
            <Search />
            <Link to='/profile'>
                <Button value="Личный кабинет" color="transparent" />
            </Link>
        </header>
    )
}