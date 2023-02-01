import React from "react";
import NavBar from "../components/NavBar";
import CardSales from "../components/CardSales";
import ActionBar from "../components/ActionBar";
import FilterButton from "../components/FilterButton";
import { Wrapper } from "../styles/pages/sales";

export default function Sales() {
  return (
    <Wrapper>
      <NavBar />

      <div className="content-page">
        <CardSales />
        <ActionBar />
        <FilterButton />
      </div>
      
    </Wrapper>
  );
}
