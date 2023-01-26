import React from "react";
import { SingleCard } from "./SingleCard/SingleCard";
import "./cardList.css";

export function CardList({ setFiltered, filteredList, removeTransition }) {
    return (
        <ul>
            <div>
                <h2>Resumo financeiro</h2>
                <div>
                    <button onClick={() => setFiltered("todos")}>Todos</button>
                    <button onClick={() => setFiltered("entrada")}>
                        Entradas
                    </button>
                    <button onClick={() => setFiltered("saída")}>
                        Despesas
                    </button>
                </div>
            </div>
            {filteredList <= 0 ? (
                <div>
                    <p>Você ainda não possui nenhum lançamento</p>
                    <img src="../../src/assets/NoCard.svg" alt="" />
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
