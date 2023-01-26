// import { useState } from "react";
export function Total({ filteredList }) {
    return (
        <div>
            <div>
                <p>Valor total:</p>
                <p>
                    ${" "}
                    {filteredList.reduce(
                        (acc, current) => acc + current.value,
                        0
                    )}
                </p>
            </div>
            <p>O valor se refere ao saldo</p>
        </div>
    );
}
