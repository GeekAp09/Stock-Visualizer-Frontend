import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CircleComponent from "./Comp";
// import BallRepulsionCanvas from './Comp'

function App() {

  return (
    <>
      <div className="wrapper">
        <div class="eight">
          <h1>Stocks Visualizer</h1>
        </div>
        <div className="container">
          <CircleComponent />
        </div>
      </div>
    </>
  );
}

export default App;
