import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transaction: [],
};
//Create context
export const GlobalContext = createContext(initialState);
//State Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // Action call reducer
  function deleteTrans(id) {
    dispatch({
      type: "Delete_Transaction",
      payload: id,
    });
  }
  function AddTransaction(id) {
    dispatch({
      type: "Add_Transaction",
      payload: id,
    });
  }
  return (
    <GlobalContext.Provider
      value={{ transaction: state.transaction, deleteTrans, AddTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
