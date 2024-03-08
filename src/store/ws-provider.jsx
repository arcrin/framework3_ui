import React, { useEffect, useState } from "react";
import WebSocketContext from "./ws-context";

function WebSocketProvider({ children }) {
  const [ws, setWs] = useState(null);

  const connectWebSocket = () => {
    const ws = new WebSocket("ws://localhost:8000");
    setWs(ws);
  };

  return (
    <WebSocketContext.Provider value={{ws, connectWebSocket}}>{children}</WebSocketContext.Provider>
  );
}

export default WebSocketProvider;
