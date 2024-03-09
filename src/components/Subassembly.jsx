import React from 'react';

function Subassembly({ subassembly }) {
  return (
    <tr className="subassembly">
      <td style={{ paddingLeft: '50px' }}>{subassembly.name}</td>
      <td>{subassembly.description}</td>
    </tr>
  );
}

export default Subassembly;