import React, { useState, } from "react";
//context 
import AppContext from "./AppContext";


const AppProvider = ({ children }) => {

    const [test, setTest] = useState("Hola desde el CONTEXT");


  return (
    <AppContext.Provider
      value={{
        test, setTest
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;