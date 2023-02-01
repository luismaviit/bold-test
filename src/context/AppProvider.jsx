import React, { useState, } from "react";
//context 
import AppContext from "./AppContext";


const AppProvider = ({ children }) => {

    const [openFilter, setOpenFilter] = useState(false);


  return (
    <AppContext.Provider
      value={{
        openFilter, setOpenFilter
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;