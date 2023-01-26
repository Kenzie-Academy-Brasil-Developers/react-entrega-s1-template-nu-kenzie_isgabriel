import { ButtonPrimary } from "../../Button/Button";
import { useState } from "react";
import { Select } from "../Select/Select";
// import "./inputs.css";

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
            setValue("1");
        }
    }
    return (
        <form onSubmit={makeTransition}>
            <div>
                <label htmlFor="description">Descrição</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Digite aqui sua descrição"
                    required
                />
                <p>Ex: Compra de roupas</p>
            </div>

            <div>
                <label htmlFor="value">Valor</label>
                <input
                    type="text"
                    name="value"
                    id="value"
                    value={value}
                    onChange={(event) => setValue(Number(event.target.value))}
                    placeholder="1"
                    required
                />
                <p>R$</p>
            </div>
            <div>
                <label htmlFor="tipeValue">Tipo de valor</label>
                <Select type={type} setType={setType} />
                <ButtonPrimary>Inserir valor</ButtonPrimary>
            </div>
        </form>
    );
}
