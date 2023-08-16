import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/index";
import { Provider } from "react-redux";
import Store from "./redux/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
