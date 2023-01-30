import React, {useContext} from "react";
import AppContext from "../context/AppContext";

export default function sales() {
  const { test } = useContext(AppContext);
  return <div>{test}</div>;
}
