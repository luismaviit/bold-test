import React from "react";
import { Div } from "../styles/components/table";

export default function Table() {
  const headerContent = [
    "Transacción",
    "Fecha y hora",
    "Método de pago",
    "ID transacción Bold",
    "Monto",
  ];
  return (
    <Div>
      <div className="container-header">
        <span className="header-tab">Tus ventas de hoy</span>
      </div>
      {/* <div className="contents-header">
        {headerContent.map((option, index) => (
          <span key={index} className="contents-span"> {option} </span>
        ))}
      </div> */}
      <div className="contents-table">
        
      </div>
    </Div>
  );
}
