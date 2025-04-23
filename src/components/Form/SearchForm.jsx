import Input from '../Input/Input';
import SearchIcon from '../../assets/icons/search-icon.svg?react';
import { useState } from 'react';

export default function SearchForm({ parentClass }) {
    const [query, setQuery] = useState("");

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <search role='search'>
            <form className={`${parentClass}__form form ${parentClass == "header" ? "hidden-mobile" : ""}`}
                action=''
            >
                <Input
                    className="form__input"
                    type={"search"}
                    placeholder={"Поиск по сайту"}
                    value={query}
                    handleChange={handleChange}
                />
                <label className='form__label' htmlFor="input">
                    <span className='visually-hidden'>Поиск по сайту</span>
                    <SearchIcon />
                </label>
            </form>
        </search>
    )
}