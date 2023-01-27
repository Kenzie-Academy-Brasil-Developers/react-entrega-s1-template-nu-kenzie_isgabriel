import { useState } from "react";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { IndexPage } from "./components/IndexPage/IndexPage";
import "./reset.css";
import "./globalStyles.css";
import "./components/Button/Button.css";
import "./App.css";

export const App = () => {
    const [start, setStart] = useState(true);
    return (
        <div className="App">
            {start ? (
                <IndexPage setStart={setStart} />
            ) : (
                <Dashboard setStart={setStart} />
            )}
        </div>
    );
};
