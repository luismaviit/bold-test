import React from "react";
import {
  Button,
  Div,
  Ul,
  SendButton,
} from "../styles/components/filter-button";

import TuneIcon from "@mui/icons-material/Tune";

export default function FilterButton() {
  return (
    <Div>
      <Button>
        Filtrar
        <span>
          <TuneIcon />
        </span>
      </Button>

      <Ul>
        <li>
          <input type="checkbox" />
          <a href="#">Cobro con datáfono</a>
        </li>
        <li>
          <input type="checkbox" />
          <a href="#">Cobors con link de pago</a>
        </li>
        <li>
          <input type="checkbox" />
          <a href="#">Ver todos</a>
        </li>
        <SendButton>Aplicar</SendButton>
      </Ul>
    </Div>
  );
}
