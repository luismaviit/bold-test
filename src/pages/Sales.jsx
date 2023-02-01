import React from "react";
import NavBar from "../components/NavBar";
import CardSales from "../components/CardSales";
import ActionBar from "../components/ActionBar";
import FilterButton from "../components/FilterButton";
import Table from "../components/Table";
import { Wrapper, ContainerBody } from "../styles/pages/sales";
import Grid from "@mui/material/Grid";

export default function Sales() {
  return (
    <Wrapper>
      <NavBar />
      <ContainerBody maxWidth="xxl">
        <Grid container spacing={5} sx={{ marginTop: "10px", display:"flex", justifyContent:"center" }}>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12} >
            <CardSales />
          </Grid>
          <Grid item xl={6} lg={7} md={4} sm={3} xs={12}>
            <ActionBar />
          </Grid>
          <Grid item xl={3} lg={2} md={2} sm={2} xs={12}>
            <FilterButton />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Table />
          </Grid>
        </Grid>
      </ContainerBody>
    </Wrapper>
  );
}
