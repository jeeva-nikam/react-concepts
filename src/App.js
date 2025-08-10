import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
// Below is the functional Component
//Definition - functional component is the normal js function which returns react element


const AppRoot = ()=>{
    return (
        <div className="app-root">
            <Header />
            <CardContainer />
        </div>
    )
}

const container = document.getElementById("demo");
const root = createRoot(container);
console.log("root", root)
root.render(<AppRoot />);
