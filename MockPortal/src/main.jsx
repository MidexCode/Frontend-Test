import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Registration from "./Registration/registration.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Registration />
  </StrictMode>
);
