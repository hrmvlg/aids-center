import Swiper from '../components/Swiper/Swiper';
import Card from '../components/Cards/Card';

const cards = [
    {
        title: "Жизнь с ВИЧ",
        subtitle: "Что делать если у меня ВИЧ?\nКак жить с ВИЧ?",
        iconUrl: "hiv-big-icon.svg",
        path: "life-with-aids",
    },
    {
        title: "Профилактика ВИЧ",
        subtitle: "Подробная статья как обезопасить себя и своих близких!",
        iconUrl: "research-icon.svg",
        path: "prevention",
    },
    {
        title: "Как передаётся ВИЧ",
        subtitle: "Мифы о передаче ВИЧ\nКак можно и нельзя заразиться ВИЧ",
        iconUrl: "syringe-icon.svg",
        path: "transmission",
    }
];

export default function HomePage() {

    return (
        <div className="home-page_wrapper">
            <Swiper />
            <div className="home-page__cards">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        className="home-page__card"
                        title={card.title}
                        subtitle={card.subtitle}
                        iconUrl={card.iconUrl}
                        path={card.path}
                    />
                ))}
            </div>
        </div>
    )
}