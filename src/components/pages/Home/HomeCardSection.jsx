import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeCards } from "../../../features/cards/homeCardsSectionSlice";
import HomeCard from "../../Cards/HomeCard";

// const cards = [
//     {
//         title: "Жизнь с ВИЧ",
//         subtitle: "Что делать если у меня ВИЧ?\nКак жить с ВИЧ?",
//         iconUrl: "hiv-big-icon.svg",
//         path: "life-with-aids",
//     },
//     {
//         title: "Профилактика ВИЧ",
//         subtitle: "Подробная статья как обезопасить себя и своих близких!",
//         iconUrl: "research-icon.svg",
//         path: "prevention",
//     },
//     {
//         title: "Как передаётся ВИЧ",
//         subtitle: "Мифы о передаче ВИЧ\nКак можно и нельзя заразиться ВИЧ",
//         iconUrl: "syringe-icon.svg",
//         path: "transmission",
//     }
// ];

export default function HomeCardSection({ className }) {

    const dispatch = useDispatch();
    const {
        homeCards,
        status,
        error
    } = useSelector((state) => state.homeCardsSection);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchHomeCards());
        }

    }, [status, dispatch])


    //if (status === 'loading') return console.log("Загрузка...");
    if (status === 'failed') return console.log(`Ошибка: ${error}`);

    return (
        <div className={className}>
            {console.log(homeCards)}
            {
                homeCards.length > 0 &&
                (
                    homeCards.map((card) => (
                        <HomeCard
                            key={card.id}
                            className="home-page__card"
                            title={card.title}
                            subtitle={card.subtitle}
                            iconUrl={card.iconUrl}
                            path={card.path}
                        />
                    ))
                )
            }
        </div>)
}