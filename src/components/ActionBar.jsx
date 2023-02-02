import React, { useState, useEffect } from "react";
import { Actions } from "../styles/components/action-bar";
import Grid from "@mui/material/Grid";

export default function ActionBar() {
  const actionButton = ["Hoy", "Esta semana", "Septiembre"];
  const [dataButton, setDataButton] = useState("");
  const ActiveToday = () => {
    setDataButton("today");
    localStorage.setItem("filterButton", "today");
  };
  const ActiveWeek = () => {
    setDataButton("week");
    localStorage.setItem("filterButton", "week");
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
        {/* {actionButton.map((option, index) => ( */}
        <Grid xl={4} lg={6} md={4} sm={10} xs={12} spacing={0}>
          <div className="container-button" /* key={index} */>
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
        <Grid xl={4} lg={6} md={4} sm={10} xs={12} spacing={0}>
          <div className="container-button" /* key={index} */>
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
        <Grid xl={4} lg={6} md={4} sm={10} xs={12} spacing={0}>
          <div className="container-button" /* key={index} */>
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
        {/*   ))} */}
      </Grid>
    </Actions>
  );
}
