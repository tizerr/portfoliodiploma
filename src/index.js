import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import {LanguageWrapper} from "./components/LanguageWrapper/LanguageWrapper";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageWrapper>
      <App/>
    </LanguageWrapper>
  </React.StrictMode>
);
