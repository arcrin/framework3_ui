import { useState, useContext, useEffect } from "react";
import WebSocketContext from "../store/ws-context";
import "../style/TestDisplay.css";
import { TestDisplayContext } from "../store/test-display-context-provider";

function TestRow({ test, level = 0 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { updateTest } = useContext(TestDisplayContext);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <tr onClick={handleToggle}>
        <td style={{ paddingLeft: `${level * 20}px` }}>
          {isExpanded ? "-" : "+"} {test.name}
        </td>
        <td>{test.expected}</td>
        <td>{test.measured}</td>
        <td>{test.description}</td>
      </tr>
      {isExpanded &&
        test.parameters &&
        Object.values(test.parameters).map((parameter) => (
          <TestRow key={parameter.id} test={parameter} level={level + 1} />
        ))}
    </>
  );
}

function TestDisplay() {
  const { ws } = useContext(WebSocketContext);
  const { tests } = useContext(TestDisplayContext);

  useEffect(() => {
    if (!ws) {
      return;
    }
    const handleMessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "tcData") {
        console.log(data.message);
      }
    };

    ws.addEventListener("message", handleMessage);

    return () => {
      ws.removeEventListener("message", handleMessage);
    };
  }, [ws]);

  return (
    <table className="test-table">
      <thead>
        <tr>
          <th>Test Case / Parameter</th>
          <th>Expected</th>
          <th>Measured</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(tests).map((test) => (
          <TestRow key={test.id} test={test} />
        ))}
      </tbody>
    </table>
  );
}

export default TestDisplay;
