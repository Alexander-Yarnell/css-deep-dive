import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function Spa() {
  return (
    <div>
      <App />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Spa />
  </React.StrictMode>,
  document.getElementById("root")
);
