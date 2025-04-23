import LogoIcon from "../../assets/icons/hiv-ind-logo.svg?react";

export default function Logo() {
    return (
        <div className="header__logo logo">
            <a href="#" className="logo__link">
                <span className="logo__text">ВИЧ.Центр</span>
                <LogoIcon className="logo__icon" />
            </a>
        </div>
    )
}