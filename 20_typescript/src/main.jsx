import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import lectures from "./lectures";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App lectures={lectures} />
);
