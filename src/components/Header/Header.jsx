import React from "react";
import logoDark from "../../assets/NuKenzie.svg";
import "./header.css";

export function Header({ setStart }) {
    return (
        <header className="header__container">
            <nav className="navbar__header">
                <img src={logoDark} alt="NuKenzie-logo" />
                <button onClick={() => setStart(true)} className="btnHeader">
                    Inicio
                </button>
            </nav>
        </header>
    );
}
