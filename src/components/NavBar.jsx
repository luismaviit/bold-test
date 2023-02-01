import React from "react";
import { Nav } from "../styles/components/nav";
import Boldsvg from "../assets/bold-svg";
import Container from "@mui/material/Container";

export default function NavBar() {
  const optionMenu = ["Mi negocio", "Ayuda(?)"];

  return (
    <Nav>
      <Container maxWidth="xxl">
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
      </Container>
    </Nav>
  );
}
