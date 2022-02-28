import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transaction: [
    { id: 1, text: "Flower", amount: -10 },
    { id: 2, text: "Book", amount: -70 },
    { id: 3, text: "Camera", amount: -20 },
    { id: 4, text: "Phone", amount: -50 },
  ],
};
//Create context
export const GlobalContext = createContext(initialState);
//State Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transaction: state.transaction }}>
      {children}
    </GlobalContext.Provider>
  );
};
