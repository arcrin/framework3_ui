import React, { useContext, useEffect } from "react";
import WebSocketContext from "./store/ws-context";
import "./style/App.css";
import LogDisplay from "./components/LogDisplay";

function App() {
  const {ws, connectWebSocket} = useContext(WebSocketContext);

  const loadTC = () => {
    if (ws.readyState === ws.OPEN) {
      ws.send("loadTC")
    }
  }
  return (
    <div className="app">
      <LogDisplay />
      <button onClick={loadTC}>Load Test Case</button>
      <button onClick={connectWebSocket}>Connect</button>
    </div>
  );
}

export default App;
