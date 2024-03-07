import React from "react";

const WebSocketContext = React.createContext({
  ws: null,
  connectWebSocket: () => {},
});

export default WebSocketContext;
