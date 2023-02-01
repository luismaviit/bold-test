import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import AppProvider from "./context/AppProvider";
import Sales from "./pages/Sales";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppProvider>  
        <Sales />  
    </AppProvider>
  );
}

export default App;
