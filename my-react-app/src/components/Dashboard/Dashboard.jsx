import { useState } from "react";
import { CardList } from "../CardList/CardList";
import { Form } from "../Form/Inputs/Inputs";
import { Total } from "../Form/Total/Total";
import { Header } from "../Header/Header";

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
            <main>
                <section>
                    <Form setListTransactions={setListTransactions} />
                    <Total filteredList={filteredList} />
                </section>
                <section>
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
