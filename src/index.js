import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";

import App from "./app";
import { GlobalStyles } from "./global-styles";
import { firebase } from "./lib/firebase.prod";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
