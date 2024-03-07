import React, { useEffect, useState } from "react";
import WebSocketContext from "./ws-context";

function WebSocketProvider({ children }) {
  const [ws, setWs] = useState(null);

  const connectWebSocket = () => {
    const ws = new WebSocket("ws://localhost:8000");
    setWs(ws);
  };

  // useEffect(() => {
  //   const websocket = new WebSocket("ws://localhost:8000");
  //   setWs(websocket);

  //   websocket.onopen = () => {
  //     console.log("Connected to WebSocket server");
  //   };

  //   websocket.onerror = (error) => {
  //     console.error("Error connecting to WebSocket server", error);
  //   };

  //   websocket.onclose = (event) => {
  //     console.log("Disconnected from WebSocket server", event.code);
  //   };

  //   return () => {
  //     websocket.close();
  //   };
  // }, []);

  return (
    <WebSocketContext.Provider value={{ws, connectWebSocket}}>{children}</WebSocketContext.Provider>
  );
}

export default WebSocketProvider;
