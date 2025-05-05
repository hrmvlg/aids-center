import Input from '../common/Input/Input';
import ArrowIcon from "../../assets/icons/right-arrow-subscribe.svg?react";

export default function SubscribeForm({ parentClass }) {

    return (
        <form
            className={`${parentClass}__form form form--white`}
            action='#'
        >
            <label htmlFor="email" className="visually-hidden">Email</label>
            <Input
                type="email"
                placeholder="Ваш Email"
                color="white"
                required={true}
                name="email"
            // value={query}
            // handleChange={handleChange}
            />
            <button className="form__button" type="submit" aria-label="Подписаться">
                <ArrowIcon />
            </button>
        </form>
    );
}
