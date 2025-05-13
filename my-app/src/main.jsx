import React from "react";
import ReactDOM from "react-dom/client";
import { TodoProvider } from "./context/TodoContext";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
