import React from "react";
// import "./header.css";

export function Header({ setStart }) {
    return (
        <header>
            <nav>
                <img src="../../src/assets/NuKenzie.svg" alt="NuKenzie-logo" />
                <button onClick={() => setStart(true)}>Início</button>
            </nav>
        </header>
    );
}
