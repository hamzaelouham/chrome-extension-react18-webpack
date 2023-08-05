import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./index.css";

const reactRootElement = document.createElement("div");
document.body.appendChild(reactRootElement);
const root = createRoot(reactRootElement);

root.render(<App />);
