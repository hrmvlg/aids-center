import HomeCard from "../../Cards/HomeCard";

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

export default function HomeCardSection({ className }) {

    return (
        <div className={className}>
            {cards.map((card, index) => (
                <HomeCard
                    key={index}
                    className="home-page__card"
                    title={card.title}
                    subtitle={card.subtitle}
                    iconUrl={card.iconUrl}
                    path={card.path}
                />
            ))}
        </div>)
}