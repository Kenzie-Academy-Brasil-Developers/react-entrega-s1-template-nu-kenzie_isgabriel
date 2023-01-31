import React from "react";
import { FaTrash } from "react-icons/fa";
import NoCard from "../../assets/NoCard.svg";
import "./cardList.css";

export function CardList({ filteredList, removeTransition }) {
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
                filteredList.map((element, index) => (
                    <li className="list__item" key={index}>
                        <div className="type">
                            {element.type === "entrada" ? (
                                <div className="type-entrada"></div>
                            ) : (
                                <div className="type-saida"></div>
                            )}
                        </div>
                        <div className="itemInfosDiv">
                            <div className="salaryValue__div">
                                <h2 className="salaryValue__div--title">
                                    {element.description}
                                </h2>
                                <p className="salaryValue__div--type">
                                    {element.type}
                                </p>
                            </div>
                            <div className="typeValueResume__div">
                                <span className="typeValueResume__div--value">
                                    {`R$ ${element.value}`}
                                </span>
                                <button
                                    onClick={(e) => removeTransition(index)}
                                    className="btnTrash"
                                >
                                    <FaTrash className="btnTrashIcon" />
                                </button>
                            </div>
                        </div>
                    </li>
                ))
            )}
        </ul>
    );
}
