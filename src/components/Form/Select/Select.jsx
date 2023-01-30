import React from "react";

export function Select({ type, setType }) {
    return (
        <select
            name="tipeValue"
            id="tipeValue"
            value={type}
            onChange={(event) => setType(event.target.value)}
        >
            <option hidden={true}>Selecionar</option>
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
        </select>
    );
}
