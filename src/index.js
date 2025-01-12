// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; // Renamed for clarity
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Create root and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Log performance metrics (optional)
reportWebVitals(console.log);