import Input from "../common/Input/Input";
import SearchIcon from "../../assets/icons/search-icon.svg?react";
import { useState } from "react";

export default function SearchForm({ parentClass }) {
    const [query, setQuery] = useState("");

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        //TODO убрать тег search так как валидатор ругается
        <search role='search'>
            <form className={`${parentClass}__form form form--gray ${parentClass == "header" ? "hidden-mobile" : ""}`}
                action=''
            >
                <Input
                    name="search"
                    color="gray"
                    type="search"
                    placeholder="Поиск по сайту"
                    value={query}
                    handleChange={handleChange}
                />
                <label className='form__label' htmlFor="search">
                    <span className='visually-hidden'>Поиск по сайту</span>
                    <SearchIcon />
                </label>
            </form>
        </search>
    )
}