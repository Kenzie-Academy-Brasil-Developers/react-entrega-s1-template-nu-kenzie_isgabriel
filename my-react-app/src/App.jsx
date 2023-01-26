// import { useState } from "react";
// import "./App.css";
// import { Form } from "./components/Form";

// function App() {
//     const [listTransactions, setListTransactions] = useState([
//         { description: "Salário recebido", type: "entrada", value: 2500 },
//         { description: "Conta de luz", type: "saída", value: -150 },
//     ]);
//     return (
//         <main>
//             {/* <Header />
//             <Form />
//             <TotalMoney />
//             <List />
//             <Card /> */}
//             <Form />
//         </main>
//     );
// }

// export default App;
import { useState } from "react";
import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
// import { Dashboard } from "./components/Dashboard";
// import { Home } from "./components/Home";

export const App = () => {
    const [start, setStart] = useState(true);
    return (
        <div className="App">
            <Dashboard />
            {/* {start ? (
                <Dashboard setStart={setStart} />
            ) : (
                console.log(<Dashboard />)
            )} */}
            {/* {start ? (
                <Home setStart={setStart} />
            ) : (
                <Dashboard setStart={setStart} />
            )} */}
        </div>
    );
};
