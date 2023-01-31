import React from "react";
import { Actions } from "../styles/components/action-bar";

export default function ActionBar() {
  const actionButton = ["Hoy", "Esta semana", "Septiembre"];
  return (
    <Actions>
      {actionButton.map((option, index) => (
        <div className="container-button" key={index}>
          <button>{option} </button>
          </div>
      ))}
    </Actions>
  );
}
