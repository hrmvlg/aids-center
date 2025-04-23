export default function Button({ value, color }) {
    return (
        <button
            className={"header__auth-button button button-" + `${color}`}
        >
            {value}
        </button>
    )
}