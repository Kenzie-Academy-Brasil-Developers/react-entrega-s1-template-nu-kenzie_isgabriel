import React from "react";
import { SingleCard } from "./SingleCard/SingleCard";
import NoCard from "../../assets/NoCard.svg";
import "./cardList.css";

export function CardList({ setFiltered, filteredList, removeTransition }) {
    return (
        <ul className="list__cards">
            <div className="financeResume__div">
                <h2 className="financeResume__div--title">Resumo financeiro</h2>
            </div>
            {filteredList <= 0 ? (
                <div className="noListDiv">
                    <p className="noListFilter--title">
                        Você ainda não possui nenhum lançamento
                    </p>
                    <img src={NoCard} className="cardLoading" />
                </div>
            ) : (
                filteredList.map((transition, index) => (
                    <SingleCard
                        key={index}
                        transition={transition}
                        removeTransition={removeTransition}
                    />
                ))
            )}
        </ul>
    );
}
