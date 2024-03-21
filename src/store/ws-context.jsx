import {React, createContext} from "react";

const WebSocketContext = createContext({
  ws: null,
  connectWebSocket: () => {},
});

export default WebSocketContext;
