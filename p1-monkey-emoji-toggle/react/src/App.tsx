import React, { useState } from "react";
import "./App.css";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const makeApiRequest = async () => {
        const res = await fetch("/");
        const data = await res.json();
        console.log(data);
    };

    return (
        <div className="App">
            <button onClick={makeApiRequest}>Call server</button>
            <button
                className="emoji"
                onClick={() => setIsOpen((open) => !open)}
            >
                {/* <button onClick={() => setIsOpen(!isOpen)}> */}
                {isOpen ? "🙉" : "🙈"}
            </button>
        </div>
    );
}

export default App;
