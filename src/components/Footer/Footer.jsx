import CallIcon from '../../assets/icons/contacts/call-icon.svg?react';
import MailIcon from '../../assets/icons/contacts/email-icon.svg?react';
import LocationIcon from '../../assets/icons/contacts/location-icon.svg?react';
import VkIcon from '../../assets/icons/socials/vk-icon.svg?react';
import TelegramIcon from '../../assets/icons/socials/tg-icon.svg?react';
import ViberIcon from '../../assets/icons/socials/viber-icon.svg?react';
import OkIcon from '../../assets/icons/socials/ok-icon.svg?react';
import YoutubeIcon from '../../assets/icons/socials/youtube-icon.svg?react';
import { Link } from "react-router"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__information">
                    <ul className="footer__information-list information-list">
                        <li className="footer__information-item item">
                            <p className="item__heading">О центре</p>
                            <Link to="/contacts" className="item__link">Контакты</Link>
                            <Link to="/events" className="item__link">Мероприятия</Link>
                            <Link to="/news" className="item__link">Новости</Link>
                        </li>
                        <li className="footer__information-item item">
                            <p className="item__heading">О ВИЧ</p>
                            <Link to="/life-with-aids" className="item__link">Жизнь с ВИЧ</Link>
                            <Link to="/prevention" className="item__link">Профилактика ВИЧ</Link>
                            <Link to="/transmission" className="item__link">Как передаётся ВИЧ</Link>
                        </li>
                        <li className="footer__information-item item">
                            <p className="item__heading">ПАЦИЕНТУ</p>
                            <Link to="/appointment" className="item__link">Запись к врачу</Link>
                            <Link to="/appointment" className="item__link">Запись к психологу</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__contacts">
                    <ul className="footer__contacts-list">
                        <li className="footer__contacts-item">
                            <span className="contacts-item__icon">
                                <CallIcon />
                            </span>
                            <Link className="contacts-item__link link" to='tel:+78125124797'>
                                +7 (812) 512-47-97
                            </Link>
                        </li>
                        <li className="footer__contacts-item">
                            <span className="contacts-item__icon">
                                <MailIcon />
                            </span>
                            <Link className="contacts-item__link link" to='mailto:hiv.center@yandex.ru'>
                                hiv.center@yandex.ru
                            </Link>
                        </li>
                        <li className="footer__contacts-item">
                            <span className="contacts-item__icon">
                                <LocationIcon />
                            </span>
                            <Link className="contacts-item__link link" to='https://yandex.ru/maps/-/CHFAR2iZ'>Санкт-Петербург, ул. Малая <br />Конюшенная, д. 11, к.31</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__socials">
                <ul className="footer__socials-list">
                    <li className="footer__socials-item">
                        <Link to="#" className="footer__socials-icon">
                            <VkIcon className="vk-icon" />
                        </Link>
                    </li>
                    <li className="footer__socials-item">
                        <Link to="#" className="footer__socials-icon">
                            <TelegramIcon className="tg-icon" />
                        </Link> </li>
                    <li className="footer__socials-item">
                        <Link to="#" className="footer__socials-icon">
                            <ViberIcon className="viber-icon" />
                        </Link>
                    </li>
                    <li className="footer__socials-item">
                        <Link to="#" className="footer__socials-icon">
                            <OkIcon className="ok-icon" />
                        </Link>
                    </li>
                    <li className="footer__socials-item">
                        <Link to="#" className="footer__socials-icon">
                            <YoutubeIcon className="youtube-icon" />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}