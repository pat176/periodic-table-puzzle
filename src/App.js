import React, { useState } from "react";
import "./App.css";
import PeriodicTable from "./PeriodicTable";
import data from "./PermanentData.json"
// import Video from "./Video";

function App() {
  const [state] = useState((()=>{
    let tmp = []
    data.elements.map(element => {
      // console.log(element)
      tmp.push([element.name, element.symbol, element.xpos, element.ypos])
      // console.log(tmp)
      return ""
    })
    return tmp
  })())
  return (
    <div className="App">
      <h1>Periodic Table of Elements</h1>
      <small> with React + CSS Grid</small>
      <PeriodicTable perm={state}/>
      {/* <Video /> */}
    </div>
  );
}

export default App;
