import { useState, createContext } from "react";
import {dummy_tests } from "../../dummy_data";

export const TestDisplayContext = createContext(
  {
    tests: null,
    updateTest: () => {}
  }
);

export function TestDisplayProvider({ children }) {
  const [tests, setTests] = useState({});

  const updateTest = (id, updatedTest) => {
    setTests((prevTests) => ({ ...prevTests, [id]: updatedTest }));
  };

  return (
    <TestDisplayContext.Provider value={{ tests, updateTest }}>
      {children}
    </TestDisplayContext.Provider>
  );
}
