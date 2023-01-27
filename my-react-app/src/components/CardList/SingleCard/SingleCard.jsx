import { FaTrash } from "react-icons/fa";
import "./singleCard.css";

export function SingleCard({ transition, removeTransition }) {
    return (
        <li className="list__item">
            <div className="type">
                {transition.type === "entrada" ? (
                    <div className="type-entrada"></div>
                ) : (
                    <div className="type-saida"></div>
                )}
            </div>
            <div className="itemInfosDiv">
                <div className="salaryValue__div">
                    <h2 className="salaryValue__div--title">
                        {transition.description}
                    </h2>
                    <p className="salaryValue__div--type">{transition.type}</p>
                </div>
                <div className="typeValueResume__div">
                    <span className="typeValueResume__div--value">
                        {`R$ ${transition.value}`}
                    </span>
                    <button
                        onClick={(e) =>
                            removeTransition(transition.description)
                        }
                        className="btnTrash"
                    >
                        <FaTrash className="btnTrashIcon" />
                    </button>
                </div>
            </div>
        </li>
    );
}
