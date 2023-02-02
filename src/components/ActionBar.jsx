import React, { useState, useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import { Actions } from "../styles/components/action-bar";
import Grid from "@mui/material/Grid";
import datas from "../utils/data.json"

export default function ActionBar() {
  const { dataButton, setDataButton, dataTab, setDatTab } =
    useContext(AppContext);
  const actionButton = ["Hoy", "Esta semana", "Septiembre"];
  const ActiveToday = () => {
    setDataButton("today");
    localStorage.setItem("filterButton", "today");
    const filterToday =dataTab.filter(dataTab => dataTab.Fecha  ==="06-30-2020")
    setDatTab(filterToday)
  };
  const ActiveWeek = () => {
    setDataButton("week");
    localStorage.setItem("filterButton", "week");
    const date = new Date("06-30-2020")
    const top = date.getTime();
    setDatTab(datas.data[1].Transaccion)
    
  };
  const ActiveMonth = () => {
    setDataButton("month");
    localStorage.setItem("filterButton", "month");
  };
  useEffect(() => {
    setDataButton(localStorage.getItem("filterButton"));
  }, []);
  
  return (
    <Actions>
      <Grid container spacing={0} sx={{}}>
        <Grid  item xl={4} lg={6} md={4} sm={10} xs={12} >
          <div className="container-button">
            <button
              className={`${
                dataButton == "today" ? "pushed-button" : "normal-button"
              }`}
              onClick={ActiveToday}
            >
              {actionButton[0]}{" "}
            </button>
          </div>
        </Grid>
        <Grid item container xl={4} lg={6} md={4} sm={10} xs={12} >
          <div className="container-button">
            <button
              className={`${
                dataButton == "week" ? "pushed-button" : "normal-button"
              }`}
              onClick={ActiveWeek}
            >
              {actionButton[1]}{" "}
            </button>
          </div>
        </Grid>
        <Grid item xl={4} lg={6} md={4} sm={10} xs={12} >
          <div className="container-button">
            <button
              className={`${
                dataButton == "month" ? "pushed-button" : "normal-button"
              }`}
              onClick={ActiveMonth}
            >
              {actionButton[2]}
            </button>
          </div>
        </Grid>
      </Grid>
    </Actions>
  );
}
