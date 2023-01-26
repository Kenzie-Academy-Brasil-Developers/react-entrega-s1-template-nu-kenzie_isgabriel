import React from "react";

export function ButtonPrimary({ children }) {
    return (
        <button type="submit" className="primaryBtn">
            {children}
        </button>
    );
}
