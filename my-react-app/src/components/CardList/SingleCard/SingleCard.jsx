import { FaTrash } from "react-icons/fa";
// import "./singleCard.css";

export function SingleCard({ transition, removeTransition }) {
    return (
        <li>
            <div className="type">
                {transition.type === "entrada" ? (
                    <div className="type-entrada"></div>
                ) : (
                    <div className="type-saida"></div>
                )}
            </div>
            <div>
                <h2>{transition.description}</h2>
                <p>{transition.value}</p>
            </div>
            <div>
                <span>R$ {transition.type}</span>
                <button
                    onClick={(e) => removeTransition(transition.description)}
                >
                    <FaTrash />
                </button>
            </div>
        </li>
    );
}
