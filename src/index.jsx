import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import WebSocketProvider from "./store/ws-provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <WebSocketProvider>
      <App />
    </WebSocketProvider>
  // </React.StrictMode>
);
