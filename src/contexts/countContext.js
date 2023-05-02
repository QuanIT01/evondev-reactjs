import { createContext, useContext, useState } from "react";

const CountContext = createContext();
function CountProvider(props) {
  const [count, setCount] = useState(0);
  const value = [count, setCount];
  return (
    <CountContext.Provider value={value} {...props}></CountContext.Provider>
  );
}
function useCount() {
  const context = useContext(CountContext);
  if (typeof context === "undefined")
    throw new Error("useContext must be used wiyhin a CountProvider");
  return context;
}

export { CountProvider, useCount };
