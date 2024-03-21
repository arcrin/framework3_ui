import  { React, useContext, useEffect, useState, useRef } from "react";
import WebSocketContext from "../store/ws-context";
import "../style/LogDisplay.css";

function LogDisplay() {
  const { ws, _ } = useContext(WebSocketContext);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    if (!ws) {
      return;
    }

    const handleMessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type == "log") {
        setLogs((prevLogs) => [...prevLogs, data.message]);
      }
    };

    ws.addEventListener("message", handleMessage);

    return () => {
      ws.removeEventListener("message", handleMessage);
    };
  }, [ws]);

  return (
    <textarea readOnly value={logs.join('\n')} className="log-display"/>
  );
}

export default LogDisplay;
