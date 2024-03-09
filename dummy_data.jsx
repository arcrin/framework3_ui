const dummyProducts = [
  {
    serialNumber: "123456",
    revision: "1.0",
    description: "Product 1 Description",
    subassemblies: [
      {
        serialNumber: "subassembly sn 1",
        revision: "subassembly rev 1",
        description: "subassembly description 1",
      },
      {
        serialNumber: "subassembly sn 2",
        revision: "subassembly rev 2",
        description: "subassembly description 2",
      },
    ],
  },
  {
    serialNumber: "789012",
    revision: "2.0",
    description: "Product 2 Description",
    subassemblies: [
      {
        serialNumber: "subassembly sn 3",
        revision: "subassembly rev 3",
        description: "subassembly description 3",
      },
    ],
  },
];

const files = [
  {
    key: "1",
    data: {
      name: "Documents",
      size: "75kb",
      type: "Folder",
    },
    children: [
      {
        key: "1-1",
        data: {
          name: "Work",
          size: "55kb",
          type: "Folder",
        },
        children: [
          {
            key: "1-1-1",
            data: {
              name: "Expenses.doc",
              size: "30kb",
              type: "Document",
            },
          },
          {
            key: "1-1-2",
            data: {
              name: "Resume.doc",
              size: "25kb",
              type: "Resume",
            },
          },
        ],
      },
      {
        key: "1-2",
        data: {
          name: "Home",
          size: "20kb",
          type: "Folder",
        },
        children: [
          {
            key: "1-2-1",
            data: {
              name: "Invoices",
              size: "20kb",
              type: "Text",
            },
          },
        ],
      },
    ],
  },
  {
    key: "2",
    data: {
      name: "Pictures",
      size: "150kb",
      type: "Folder",
    },
    children: [
      {
        key: "2-1",
        data: {
          name: "barcelona.jpg",
          size: "90kb",
          type: "Picture",
        },
      },
      {
        key: "2-2",
        data: {
          name: "logo.jpg",
          size: "30kb",
          type: "Picture",
        },
      },
      {
        key: "2-3",
        data: {
          name: "primeui.png",
          size: "30kb",
          type: "Picture",
        },
      },
    ],
  },
];

const nodes =  [
  {
    key: "0",
    data: { name: "Documents", size: "75kb", type: "Folder" },
    children: [
      {
        key: "0-0",
        data: { name: "Work", size: "55kb", type: "Folder" },
        children: [
          {
            key: "0-0-0",
            data: { name: "Expenses.doc", size: "30kb", type: "Document" },
            children: [ // Adding another level of children
              { key: "0-0-0-0", data: { name: "2020", size: "10kb", type: "Text" } },
              { key: "0-0-0-1", data: { name: "2021", size: "20kb", type: "Text" } },
            ]
          },
          { key: "0-0-1", data: { name: "Resume.doc", size: "25kb", type: "Document" } },
        ],
      },
      {
        key: "0-1",
        data: { name: "Home", size: "20kb", type: "Folder" },
        children: [
          { key: "0-1-0", data: { name: "Invoices.txt", size: "20kb", type: "Text" } }
        ],
      },
    ],
  },
  {
    key: "1",
    data: { name: "Pictures", size: "150kb", type: "Folder" },
    children: [
      { key: "1-0", data: { name: "barcelona.jpg", size: "90kb", type: "Picture" } },
      { key: "1-1", data: { name: "logo.jpg", size: "60kb", type: "Picture" } },
    ],
  },
];


export { dummyProducts, files, nodes };