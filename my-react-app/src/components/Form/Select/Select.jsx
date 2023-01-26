import React from "react";
// import "./select.css";

export function Select({ type, setType }) {
    return (
        <select
            name="tipeValue"
            id="tipeValue"
            value={type}
            onChange={(event) => setType(event.target.value)}
        >
            <option value="" hidden={true}>
                Selecionar Tipo
            </option>
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
        </select>
    );
}
