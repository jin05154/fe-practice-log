import React from "react";
import "./App.css";

/* components */
import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="App">
      <Toggle />
      <Tab />
      <Input />
      <Dropdown />
    </div>
  );
}

export default App;
