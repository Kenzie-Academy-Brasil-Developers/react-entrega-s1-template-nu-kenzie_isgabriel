import { ButtonPrimary } from "../Button/Button";
import { useState } from "react";
import { Select } from "./Select/Select";

export function Form({ setListTransactions }) {
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [value, setValue] = useState("");

    function makeTransition(event) {
        event.preventDefault();

        if (description !== "" && type !== "" && value !== "") {
            const newTrans = {
                description,
                type,
                value,
            };
            if (newTrans.type === "saída" && newTrans.value > 0) {
                newTrans.value = newTrans.value * -1;
            } else if (newTrans.type === "entrada" && newTrans.value < 0) {
                newTrans.value = newTrans.value * -1;
            }

            setListTransactions((oldTrans) => [...oldTrans, newTrans]);
            setDescription("");
            setType("");
            setValue("");
        }
    }
    return (
        <form onSubmit={makeTransition} className="form">
            <div className="divDescription">
                <label htmlFor="description" className="descLabel">
                    Descrição
                </label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Digite aqui sua descrição"
                    required
                />
                <p className="exampleInput">Ex: Compra de roupas</p>
            </div>

            <div className="divValueAndType">
                <div className="divTypeValue">
                    <label htmlFor="value" className="descLabel">
                        Valor
                    </label>
                    <input
                        type="text"
                        name="value"
                        id="value"
                        value={value}
                        onChange={(event) =>
                            setValue(Number(event.target.value))
                        }
                        placeholder="1"
                        required
                    />
                    <p className="typeOfCash">R$</p>
                </div>
                <div className="divTypeValue">
                    <label htmlFor="tipeValue" className="descLabel">
                        Tipo de valor
                    </label>
                    <Select type={type} setType={setType} />
                </div>
            </div>
            <ButtonPrimary className="btnStyle">Inserir valor</ButtonPrimary>
        </form>
    );
}
