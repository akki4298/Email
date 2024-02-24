import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import EmailForm from "./Components/EmailForm";
import Textbox from "./Components/Textbox";
import { useState } from "react";

function App() {
  let [mode, setMode] = useState("light");
  const darkmodefun = () => {
    console.log("darkmodetrunning");
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <div>
      <Navbar word="NavTitle" about="About" mode={mode} fun={darkmodefun} />

      <EmailForm />
    </div>
  );
}

export default App;
