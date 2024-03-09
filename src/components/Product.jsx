import React from "react";
import Subassembly from "./Subassembly";
import "../style/ProductInfoDisplay.css";

function Product({ product }) {
  return (
    <table className="product">
      <thead>
        <tr>
          <th>Serial Number</th>
          <th>Revision</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{product.serialNumber}</td>
          <td>{product.revision}</td>
          <td>{product.description}</td>
        </tr>
        {product.subassemblies.map((subassembly) => (
          <Subassembly key={subassembly.id} subassembly={subassembly} />
        ))}
      </tbody>
    </table>
  );
}

export default Product;
