import React from "react";
import World from "./components/World";
import { WorldProvider } from "./context/WorldContext.jsx";


const App = () => {
  return (
    <WorldProvider>
      <World />
    </WorldProvider>
  );
}

export default App;
