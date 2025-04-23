import { useParams } from "react-router-dom";

export default function EventPage() {
    const { id } = useParams();

    return(
        <div className="">
           мы на странице мероприятия {id}
        </div>
    )
}