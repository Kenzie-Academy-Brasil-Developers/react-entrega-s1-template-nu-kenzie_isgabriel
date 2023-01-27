import React from "react";
import logo from "../../assets/NuKenzieLight.svg";
import mainImg from "../../assets/mainImg-landingPage.svg";
import styles from "./style.module.css";
import "./IndexPage.css";

export function IndexPage({ setStart }) {
    return (
        <div className={styles.container__indexPage}>
            <section className="section__pageContent">
                <img
                    src={logo}
                    alt="nu-kenzie-logo"
                    className="nuKenzie-logo"
                />
                <h1 className="indexTitle">
                    Centralize o controle das suas finanças
                </h1>
                <p className="indexDescription">de forma rápida e segura</p>
                <div className="divBtn">
                    <button
                        onClick={() => setStart(false)}
                        className="btnStyle"
                    >
                        Iniciar
                    </button>
                </div>
            </section>
            <section className="divMainImg">
                <img
                    src={mainImg}
                    alt="landing-page-picture"
                    className="mainImg"
                />
            </section>
        </div>
    );
}
