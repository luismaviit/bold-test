import React from "react";
import Nav from "../components/Nav";
import CardSales from "../components/CardSales";
import { Wrapper } from "../styles/pages/sales";

export default function Sales() {
  return (
    <Wrapper>
      <Nav />
      <div>
        <CardSales />
      </div>
    </Wrapper>
  );
}
