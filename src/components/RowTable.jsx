import React from "react";


export default function RowTable({ data }) {

  const { Estado, FechaHora, Realizado, MetodoPago, IDtransaccionBold, Monto } =
    data;
  return (
    <div className="">
      <span>{Estado}</span>
      <span>{FechaHora}</span> <span>{Realizado}</span>
      <span>{MetodoPago}</span>
      <span>{IDtransaccionBold}</span>
      <span>{Monto}</span>
    </div>
  );
}
