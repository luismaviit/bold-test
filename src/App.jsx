import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import AppProvider from "./context/AppProvider";
import Sales from "./pages/Sales";
import "./Index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppProvider>
      <div>
        <Sales />
      </div>
    </AppProvider>
  );
}

export default App;
