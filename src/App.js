import React, { useState } from "react";
import Table from "./components/Table";
import "./components/styles/main.css";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <div className="heading">Start Playing</div>
      <button
        className="btn-default"
        onClick={() => {
          setShow(true);
        }}
      >
        Revise
      </button>
      <button className="btn-default">Easy: 1-20 Elements</button>
      <button className="btn-default">Medium: 21-54 Elements</button>
      <button className="btn-default">
        Hard: 55- 118(Except Lanthanides and Actinides)
      </button>
      <button className="btn-default">
        Professional: Lanthanides and Actinides
      </button>
      {show ? <Table /> : null}
    </div>
  );
}

export default App;
