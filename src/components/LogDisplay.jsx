import React, { useContext, useEffect, useState, useRef } from "react";
import WebSocketContext from "../store/ws-context";
import "../style/LogDisplay.css";

function LogDisplay() {
  const {ws, _} = useContext(WebSocketContext);
  const [logs, setLogs] = useState([]);
  const logDisplayRef = useRef();

  useEffect(() => {
    if (!ws) {
      return;
    }

    const handleMessage = (event) => {
      // const message = JSON.parse(event.data);

      // if (message.type === 'log') {
      //     setLogs((prevLogs) => [...prevLogs, message.data]);
      // }
      setLogs((prevLogs) => [...prevLogs, event.data]);
    };

    ws.addEventListener("message", handleMessage);

    return () => {
      ws.removeEventListener("message", handleMessage);
    };
  }, [ws]);

  return (
    <pre className="log-display">
      {logs.map((log, index) => (
        <div key={index}>{log}</div>
      ))}
    </pre>
  );
}

export default LogDisplay;
