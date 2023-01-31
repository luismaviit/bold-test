import React from "react";
import { Nav } from "../styles/components/nav";
import Boldsvg from "../assets/bold-svg";

export default function NavBar() {
  const optionMenu = ["Mi negocio", "Ayuda(?)"];

  return (
    <Nav>
      <div className="container-content">
        <a href="https://bold.co/">
          <Boldsvg fill="white" />
        </a>
        <ul>
          {optionMenu.map((option, index) => (
            <li key={index}>
              <a href="">{option}</a>
            </li>
          ))}
        </ul>
      </div>
    </Nav>
  );
}
