/* eslint-disable react/prop-types */

export default function Input(props) {

    const {
        name,
        type,
        placeholder,
        color,
        value,
        handleChange,
        required
    } = props;

    return (
        <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className={`form__input ${color ? 'form__input--' + color : ''}`}
            required={required}
        />
    )
}