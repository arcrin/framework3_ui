const dummy_products = [
  {
    key: "0",
    data: {
      serialNumber: "1024560107",
      revision: "1.2",
      description: "DCRED5 11xx",
      firmware: "1.0",
    },
    children: [
      {
        data: {
          serialNumber: "11112154",
          revision: "1.1",
          description: "Backup module",
        },
      },
    ],
  },
];

const dummy_test_data = [
  {
    key: "test1",
    data: {
      name: "Test 1",
      status: true,
      progress: 100,
    },
    children: [
      {
        key: 1,
        data: {
          name: "execution 1",
        },
        children: [
          {
            data: {
              name: "parameter 1",
              expected: "expected value",
              measured: "measured value",
              description: "parameter 1 description",
            },
          },
          {
            data: {
              name: "parameter 2",
              expected: "expected value",
              measured: "measured value",
              description: "parameter 2 description",
            },
          },
          {
            data: {
              name: "parameter 3",
              expected: "expected value",
              measured: "measured value",
              description: "parameter 3 description",
            },
          },
        ],
      },
    ],
  },
  {
    key: "test2",
    data: {
      name: "Test 2",
      status: true,
    },
    children: [
      {
        key: 2,
        data: {
          name: "execution 1",
        },
        children: [
          {
            data: {
              name: "parameter 1",
              expected: "expected value",
              measured: "measured value",
              description: "parameter 1 description",
            },
          },
          {
            data: {
              name: "parameter 2",
              expected: "expected value",
              measured: "measured value",
              description: "parameter 2 description",
            },
          },
          {
            data: {
              name: "parameter 3",
              expected: "expected value",
              measured: "measured value",
              description: "parameter 3 description",
            },
          },
        ],
      },
    ],
  },
  {
    key: "test3",
    data: {
      name: "Test 3",
      status: false,
    },
    children: [
      {
        key: 3,
        data: {
          name: "execution 1",
        },
        children: [
          {
            data: {
              name: "parameter 1",
              expected: "expected value",
              measured: "measured value",
              description: "parameter 1 description",
            },
          },
          {
            data: {
              name: "parameter 2",
              expected: "expected value",
              measured: "measured value",
              description: "parameter 2 description",
            },
          },
          {
            data: {
              name: "parameter 3",
              expected: "expected value",
              measured: "measured value",
              description: "parameter 3 description",
            },
          },
        ],
      },
    ],
  },
];
export { dummy_products, dummy_test_data };
