import React from "react";
import "./button.css";

export function ButtonPrimary({ children }) {
    return (
        <button type="submit" className="primaryBtn">
            {children}
        </button>
    );
}
