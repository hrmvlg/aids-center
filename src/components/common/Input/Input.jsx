import { useState } from "react";
import SubmitIcon from '../../../assets/icons/right-arrow-subscribe.svg?react';


export default function Input({ parentClass, type, placeholder, className, value, handleChange }) {

    return (
        <input
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className={className}
            id="input"
        />
    )
}