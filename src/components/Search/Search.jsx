import { useState } from "react";

export default function Search() {
    const [query, setQuery] = useState("");

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <search className="search">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Поиск по сайту"
                className="search__input"
            />
        </search>
    )
}