import React from "react";

function ButtonGroup({ onStart, onConnect, onOpenPrompt }) {
  return (
    <div>
      <button onClick={onStart}>Load Test Case</button>
      <button onClick={onConnect}>Connect</button>
      {/* <button onClick={onOpenPrompt}>Open Prompt</button> */}
    </div>
  );
}

export default ButtonGroup;