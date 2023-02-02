import React, { useState } from "react";
//context
import AppContext from "./AppContext";
//import data
import datas from "../utils/data.json";

const AppProvider = ({ children }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [dataButton, setDataButton] = useState("");
  const [dataTab, setDatTab] = useState(datas.data[1].Transaccion);

  return (
    <AppContext.Provider
      value={{
        openFilter,
        setOpenFilter,
        dataButton,
        setDataButton,
        dataTab,
        setDatTab,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
