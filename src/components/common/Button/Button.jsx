export default function Button({ parentClass, isRed, value }) {

    const baseClass = `${parentClass}__button`;
    const visibilityClass = parentClass === "header" ? "hidden-mobile" : "";
    const colorClass = `button-${isRed ? "red" : "transparent"}`;

    const className = [baseClass, visibilityClass, "button", colorClass]
        .filter(Boolean)
        .join(" ");

    return (
        <button
            className={className}
        >
            {value}
        </button>
    )
}