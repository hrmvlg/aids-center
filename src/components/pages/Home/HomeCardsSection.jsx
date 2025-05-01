import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeCards } from "../../../features/cards/homeCardsSectionSlice";
import HomeCard from "../../Cards/HomeCard";

export default function HomeCardsSection({ className }) {

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