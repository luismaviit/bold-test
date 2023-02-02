import React, { useEffect, useContext } from "react";
import { Div } from "../styles/components/table";
import Grid from "@mui/material/Grid";
import RowTable from "./RowTable";
import datas from "../utils/data.json";
import AppContext from "../context/AppContext";

export default function Table() {
  //SE EMPLEA FECHA ACTUAL DE SEPTIMBRE 30 DEL 2020
  const { dataTab, setDatTab } = useContext(AppContext);

  const headerContent = [
    "Transacción",
    "Fecha y hora",
    "Método de pago",
    "ID transacción Bold",
    "Monto",
  ];
  useEffect(() => {}, []);
  return (
    <Div>
      <div className="container-header">
        <span className="header-tab">Tus ventas de hoy</span>
      </div>
      <div className="contents-header">
        {headerContent.map((option, index) => (
          <span key={index} className="contents-span">
            {option}
          </span>
        ))}
      </div>

      <div className="contents-table">
        {dataTab.map((option, index) => (
          <RowTable key={index} data={option} />
        ))}
      </div>
    </Div>
  );
}
