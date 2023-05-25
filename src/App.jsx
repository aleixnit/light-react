import "./App.css";
import LightOnImg from "./assets/lighton.png";
import LightOffImg from "./assets/lightoff.png";
import React, { useState } from "react";

function App() {
  return (
    <>
      <Light />
    </>
  );
}

function Light() {
  const [statusLight, setStatusLight] = useState("on");

  function apagarEncender() {
  if (statusLight === 'on') {
    setStatusLight('off');
  } else if (statusLight === 'off') {
    setStatusLight('on');
  }
}

  return (
    <div>
      <h1>Click the buttons to turn on or off the light</h1>
      <img src={statusLight === "on" ? LightOnImg : LightOffImg} />
      <div>
        <button
          style={{ display: statusLight === "on" ? "none" : "block" }}
          onClick={apagarEncender}
        >
          Turn On
        </button>
        <button
          onClick={apagarEncender}
          style={{ display: statusLight === "off" ? "none" : "block" }}
        >
          Turn Off
        </button>
      </div>
    </div>
  );
}

export default App;
