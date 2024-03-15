import { useState } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

function App() {
  return (
    <>
      <div>
        <h1>React Rest Countries</h1>
        <Countries></Countries>
      </div>
    </>
  );
}

export default App;
