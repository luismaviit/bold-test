import React, {useContext} from "react";
import AppContext from "../context/AppContext";

export default function Nav() {
  const { test } = useContext(AppContext);
  return <div>{test}</div>;
}
