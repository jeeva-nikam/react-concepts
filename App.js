import React from "react";
import { createRoot } from "react-dom/client";

// Below is the functional Component
//Definition - functional component is the normal js function which returns react element
const Header = () => <h1 id="header">Header</h1>;

// Componen composition
// Definition - Combining 2 compnents called as component composition
const Cotainer = () => (
    <div id="container" className="container">
        <Header />
        <div className="border">
            <h2>This is the container</h2>
        </div>
    </div>
);

const container = document.getElementById("demo");
const root = createRoot(container);
console.log("root", root)
root.render(<Cotainer />);
