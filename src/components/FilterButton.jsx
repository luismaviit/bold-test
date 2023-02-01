import React, { useContext, useState } from "react";
import {
  Button,
  Div,
  Ul,
  SendButton,
} from "../styles/components/filter-button";
//context
import AppContext from "../context/AppContext";

import TuneIcon from "@mui/icons-material/Tune";

export default function FilterButton() {
  const { openFilter, setOpenFilter } = useContext(AppContext);
  const [dataFilter, setDataFilter] = useState({
    cobroDatafono: false,
    cobroLink: false,
    verTodo: false,
  });
  const handleOpen = () => {
    setOpenFilter(!openFilter);
  };
  const OnChangeFilter = (event) => {
    const { name, checked } = event.target;
    setDataFilter({
      ...dataFilter,
      [name]: checked,
    });
  };
  const ApplyChange = () => {
    localStorage.setItem("checks", `${dataFilter}`);
  };

  return (
    <Div>
      <Button onClick={handleOpen}>
        Filtrar
        <span>
          <TuneIcon />
        </span>
      </Button>

      <ul
        className={`${openFilter ? "visible-container" : "hidden-container"}`}
      >
        <li>
          <input
            checked={dataFilter.cobroDatafono}
            name="cobroDatafono"
            type="checkbox"
            value="cobros con datafono "
            onChange={OnChangeFilter}
          />
          <a href="#">Cobro con datáfono</a>
        </li>
        <li>
          <input
            checked={dataFilter.cobroLink}
            name="cobroLink"
            type="checkbox"
            value="Cobros con link de pago"
            onChange={OnChangeFilter}
          />
          <a href="#">Cobros con link de pago</a>
        </li>
        <li>
          <input
            checked={dataFilter.verTodo}
            name="verTodo"
            type="checkbox"
            value="Ver todos"
            onChange={OnChangeFilter}
          />
          <a href="#">Ver todos</a>
        </li>

        <SendButton onClick={() => ApplyChange()}>Aplicar</SendButton>
      </ul>
    </Div>
  );
}
