import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/fonts.css";
import { App } from "./App.jsx";
import { ThemeContextProvider } from "./contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
