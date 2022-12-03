import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";

import PlayerList from "./Player-container";
import { BrowserRouter, useNavigate } from "react-router-dom";

const appElement = document.getElementById("app");

const root = createRoot(appElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
