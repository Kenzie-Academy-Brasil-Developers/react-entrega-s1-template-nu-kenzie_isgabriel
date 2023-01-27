import React from "react";
import "./header.css";

export function Header({ setStart }) {
    return (
        <header className="header__container">
            <nav className="navbar__header">
                <img src="../../src/assets/NuKenzie.svg" alt="NuKenzie-logo" />
                <button onClick={() => setStart(true)} className="btnHeader">
                    Inicio
                </button>
            </nav>
        </header>
    );
}
