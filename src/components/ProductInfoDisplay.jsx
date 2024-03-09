import React from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Product from './Product';

function ProductInfoDisplay({ products }) {
    const data = products.map(product => ({
        data: {
          serialNumber: product.serialNumber,
          revision: product.revision,
          description: product.description
        },
        children: product.subassemblies.map(subassembly => ({
          data: {
            serialNumber: subassembly.serialNumber,
            revision: subassembly.revision,
            description: subassembly.description
          }
        }))
      }));
    
      return (
        <TreeTable value={data}>
          <Column field="data.serialNumber" header="Serial Number" />
          <Column field="data.revision" header="Revision" />
          <Column field="data.description" header="Description" />
        </TreeTable>
      );
  }

export default ProductInfoDisplay;