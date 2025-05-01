import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeInfoCards } from "../../../features/cards/homeInfoCardsSectionSlice";
import HomeInfoCard from "../../Cards/HomeInfoCard";

export default function HomeInfoCards({ className }) {

    const dispatch = useDispatch();
    const {
        homeInfoCards,
        status,
        error
    } = useSelector((state) => state.homeInfoCards);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchHomeInfoCards());
        }

    }, [status, dispatch])

    //if (status === 'loading') return console.log("Загрузка...");
    if (status === 'failed') return console.log(`Ошибка: ${error}`);

    return (
        <div className={`${className}__info-cards`}>
            {
                homeInfoCards.length > 0 &&
                (
                    homeInfoCards.map((card) => (
                        <HomeInfoCard
                            key={card.id}
                            className="info-card"
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