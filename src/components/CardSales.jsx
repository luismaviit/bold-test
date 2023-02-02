import React from "react";
import { Card } from "../styles/components/card";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import datas from "../utils/data.json";

export default function CardSales() {
  return (
    <Card>
      <div className="card-header">
        <span> Total ventas de hoy </span>
        <span>
          <InfoOutlinedIcon fontSize="" />
        </span>
      </div>
      <div className="card-content">
        <span className="total-sales">{datas.data[0].Hoy}</span>
        <span className="current-date">Septiembre, 2022 </span>
      </div>
    </Card>
  );
}
