import { useState } from "react";
import { CardList } from "../CardList/CardList";
import { Form } from "../Form/Form";
import { TotalMoney } from "../Form/Total/Total";
import { Header } from "../Header/Header";
import "./dashboard.css";

export function Dashboard({ setStart }) {
    const [listTransactions, setListTransactions] = useState([]);
    const [filtered, setFiltered] = useState("todos");

    const filteredList = listTransactions.filter((transition) =>
        filtered === "todos" ? true : transition.type === filtered
    );

    function removeTransition(transName) {
        const newList = listTransactions.filter(
            (element) => element.description !== transName
        );
        setListTransactions(newList);
    }

    return (
        <>
            <Header setStart={setStart} />
            <main className="main__container">
                <section className="form__container">
                    <Form setListTransactions={setListTransactions} />
                    <TotalMoney filteredList={filteredList} />
                </section>
                <section className="card__section">
                    <CardList
                        setFiltered={setFiltered}
                        filteredList={filteredList}
                        removeTransition={removeTransition}
                    />
                </section>
            </main>
        </>
    );
}
