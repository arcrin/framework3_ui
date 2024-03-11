import React from "react";
import { useState, useEffect, useContext } from "react";
import WebSocketContext from "../store/ws-context";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import "primeicons/primeicons.css";
import "../style/TestDisplay.css";
import { dummy_test_data } from "../../dummy_data";

function TestDisplay({}) {
  const { ws, _ } = useContext(WebSocketContext);
  const [tcData, setTcData] = useState([]);

  useEffect(() => {
    if (!ws) {
      return;
    }
    const handleMessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type == "tcData") {
        setTcData(data.message);
      }
    };

    ws.addEventListener("message", handleMessage);

    return () => {
      ws.removeEventListener("message", handleMessage);
    };
  }, [ws]);

  // useEffect(() => {
  //   setTcData(dummy_test_data);
  // }, []);

  const actionBodyTemplate = (rowData) => {
    const reTest = () => {
      console.log(`Re-testing ${rowData.key}`);
    };
    const cancelTest = () => {
      console.log(`Canceling ${rowData.key}`);
    };
    if (rowData.hasOwnProperty("key")) {
      return (
        <>
          {rowData.data.name}
          {!rowData.data.status && rowData.data.hasOwnProperty("status") && (
            <Button
              icon="pi pi-refresh"
              className="green-icon white-background"
              onClick={reTest}
            ></Button>
          )}
          {rowData.data.hasOwnProperty("status") && (
            <Button
              icon="pi pi-times"
              className="red-icon white-background"
              onClick={cancelTest}
            ></Button>
          )}
        </>
      );
    }
  };

  const nameBodyTemplate = (rowData) => {
    return (
      <>
        {rowData.data.hasOwnProperty("progress") && (
          <ProgressBar value={rowData.data.progress} showValue={true} />
        )}
      </>
    );
  };

  const getRowClass = (rowData) => {
    return {
      "highlight-row":
        !rowData.data.status && rowData.data.hasOwnProperty("status"),
    };
  };

  return (
    <div className="test-display-container">
      <TreeTable
        value={tcData}
        className="test-display-font-size"
        rowClassName={getRowClass}
      >
        <Column
          body={nameBodyTemplate}
          header="Progress"
          style={{ width: "10%" }}
        ></Column>
        <Column
          field="name"
          body={actionBodyTemplate}
          header="Test Case / Parameter"
          expander
        ></Column>
        <Column field="expected" header="Expected"></Column>
        <Column field="measured" header="Measured"></Column>
        <Column field="description" header="Description"></Column>
      </TreeTable>
    </div>
  );
}

export default TestDisplay;
