import React, { useContext, useEffect, useState, useID } from "react";
import WebSocketContext from "./store/ws-context";
import "./style/App.css";
import LogDisplay from "./components/LogDisplay";
import Prompt from "./components/Prompt";
import ButtonGroup from "./components/ButtonGroup";
import ProductInfoDisplay from "./components/ProductInfoDisplay";
import { dummy_products } from "../dummy_data";

function App() {
  const { ws, connectWebSocket } = useContext(WebSocketContext);
  const [isPromptOpen, setIsPromptOpen] = useState(false);

  useEffect(() => {
    if (!ws) {
      return;
    }

    const handleMessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type == "prompt") {
        setIsPromptOpen(true);
      }
    };

    ws.addEventListener("message", handleMessage);

    return () => {
      ws.removeEventListener("message", handleMessage);
    };
  }, [ws]);

  const handleConfirmPrompt = (value) => {
    if (ws.readyState === ws.OPEN) {
      ws.send(JSON.stringify({ type: "ui-response", value }));
    }
    setIsPromptOpen(false);
  };

  const handleCancelPrompt = () => {
    setIsPromptOpen(false);
  };

  const startButtonHandler = () => {
    if (ws.readyState === ws.OPEN) {
      ws.send(JSON.stringify({ type: "command", value: "loadTC" }));
    }
  };

  const openPromptButtonClickHandler = () => {
    setIsPromptOpen(!isPromptOpen);
  };
  return (
    <div className="app">
      <div className="display-container">
        <LogDisplay />
        {/* <div className="spacer"></div> */}
        <ProductInfoDisplay products={dummy_products} />
      </div>
      <ButtonGroup
        onStart={startButtonHandler}
        onConnect={connectWebSocket}
        onOpenPrompt={openPromptButtonClickHandler}
      />
      <Prompt
        isOpen={isPromptOpen}
        onConfirm={handleConfirmPrompt}
        onCancel={handleCancelPrompt}
      />
    </div>
  );
}

export default App;
