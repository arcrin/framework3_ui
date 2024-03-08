import React, { useContext, useEffect, useState } from "react";
import WebSocketContext from "./store/ws-context";
import "./style/App.css";
import LogDisplay from "./components/LogDisplay";
import Prompt from "./components/Prompt";

function App() {
  const { ws, connectWebSocket } = useContext(WebSocketContext);
  const [isPromptOpen, setIsPromptOpen] = useState(false);

  useEffect(() => {
    if (!ws) {
      return;
    }

    const handleMessage = (event) => {
      const data = JSON.parse(event.data)
      if (data.type == "prompt"){
        setIsPromptOpen(true);
      } 
        
    };

    ws.addEventListener("message", handleMessage);

    return () => {
      ws.removeEventListener("message", handleMessage);
    };
  }, [ws]);

  const handleButtonOpenPrompt = () => {
    if (ws.readyState === ws.OPEN) ws.send("prompt-sim");
  };

  const handleConfirmPrompt = (value) => {
    if (ws.readyState === ws.OPEN){
      ws.send(JSON.stringify({type: "ui-response", value}));
    }
    setIsPromptOpen(false);
  };

  const handleCancelPrompt = () => {
    setIsPromptOpen(false);
  };

  const loadTC = () => {
    if (ws.readyState === ws.OPEN) {
      ws.send(JSON.stringify({type: "command", value: "loadTC"}));
    }
  };
  return (
    <div className="app">
      <LogDisplay />
      <button onClick={loadTC}>Load Test Case</button>
      <button onClick={connectWebSocket}>Connect</button>
      <button onClick={handleButtonOpenPrompt}>Open Prompt</button>
      <Prompt
        isOpen={isPromptOpen}
        onConfirm={handleConfirmPrompt}
        onCancel={handleCancelPrompt}
      />
    </div>
  );
}

export default App;
