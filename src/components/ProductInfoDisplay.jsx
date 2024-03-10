import React from "react";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import "../style/ProductInfoDisplay.css";

function ProductInfoDisplay({ products }) {
  return (
    <div className="product-info-display-container">
      <TreeTable value={products} className="product-display-table">
        <Column field="serialNumber" header="Serial Number" expander></Column>
        <Column field="revision" header="Revision"></Column>
        <Column field="description" header="Description"></Column>
        <Column field="firmware" header="Firmware"></Column>
      </TreeTable>
    </div>
  );
}

export default ProductInfoDisplay;
