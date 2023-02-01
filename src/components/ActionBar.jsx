import React from "react";
import { Actions } from "../styles/components/action-bar";
import Grid from "@mui/material/Grid";

export default function ActionBar() {
  const actionButton = ["Hoy", "Esta semana", "Septiembre"];
  return (
    <Actions>
      <Grid container spacing={0} sx={{  }}>
      {actionButton.map((option, index) => (
        <Grid xl={4} lg={6} md={4} sm={10} xs={12} spacing={0}>
        <div className="container-button" key={index}>
          <button>{option} </button>
        </div>
        </Grid>
      ))}
      </Grid>
    </Actions>
  );
}
