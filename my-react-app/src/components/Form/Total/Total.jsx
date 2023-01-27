import "./total.css";

export function TotalMoney({ filteredList }) {
    return (
        <div className="divTotalCart">
            <div className="divTotalCart__description">
                <p className="divTotalCart__description--title">Valor total:</p>
                <p className="divTotalCart__description--value">
                    {filteredList.reduce(
                        (acc, current) => acc + current.value,
                        0
                    )}
                </p>
            </div>
            <p className="divTotalCart--span">O valor se refere ao saldo</p>
        </div>
    );
}
