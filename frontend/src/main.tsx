import React from "react";
import ReactDOM from "react-dom/client";
// Supports weights 100-900
import "@fontsource-variable/inter";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);