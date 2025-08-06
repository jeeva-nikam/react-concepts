import React  from "react";
import ReactDOM  from "react-dom/client";

const el = React.createElement('div', { id: "parent" },
    [React.createElement('h1', { id: "heading" }, 'This is heading')]
);

const root = ReactDOM.createRoot(document.getElementById("demo"));
console.log("root", root)
root.render(el);