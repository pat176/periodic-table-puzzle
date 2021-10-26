import React, { useState } from "react";
import data from "./PeriodicTableJSON.json";
import "./PeriodicTable.css";

const colorMap = {
  "noble gas": "#FFBC42",
  "alkaline earth metal": "#EC674E",
  "diatomic nonmetal": "#D81159",
  "alkali metal": "#8F2D56",
  "transition metal": "#58586B",
  "post-transition metal": "#218380",
  lanthanide: "#4AABAF",
  metalloid: "#73D2DE",
};
function shuffle(array) {
  var tmp = array
  tmp.map((el, ind) => {
    var tmpN = parseInt(Math.random() * 119)
    var tmpEl = [tmp[ind][0], tmp[ind][1]]
    tmp[ind][0] = tmp[tmpN][0]
    tmp[tmpN][0] = tmpEl[0]
    tmp[ind][1] = tmp[tmpN][1]
    tmp[tmpN][1] = tmpEl[1]
  })
  return tmp
}
var els = []
data.elements.map(element => {
  // console.log(element)
  els.push([element.name, element.symbol, element.xpos, element.ypos])
})
els = shuffle(els)
const PeriodicTable = (props) => {
  const [state, setstate] = useState({
    data: els,
    currentEl: undefined
  })
  return (
    <div className="periodic-table">
      {state.data.map((element, index) => (
        <div
          className="element"
          key={element[0]}
          style={{
            borderWidth: state.currentEl === index ? "3px" : "1px",
            gridRow: element[3],
            gridColumn: element[2],
          }}
          onClick={() => {
            if (state.currentEl === undefined) {
              setstate({ ...state, currentEl: index })
            } else {
              // console.log(index)
              var tmp = state.data
              var tmpEl = tmp[state.currentEl]
              tmp[state.currentEl] = [tmp[index][0], tmp[index][1], tmpEl[2], tmpEl[3]]
              tmp[index] = [tmpEl[0], tmpEl[1], tmp[index][2], tmp[index][3]]
              setstate({ ...state, currentEl: undefined, data: tmp })
            }
          }}
        >
          <strong>{element[1]}</strong>
          <small className="name">{element[0]}</small>
        </div>
      ))}
      <button style={{
        margin: "5px",
        background: "white",
        color: "black",
        fontWeight: "bold",
        fontSize: "1.2em",
        padding: "5px",
        border: "2px solid black",
        cursor: "pointer",
        gridColumnStart: "8",
        gridColumnEnd: "10",
        gridRowStart: "3",
        gridRowEnd: "4",
      }} onClick={() => {
        // console.log(props.perm)
        // console.log(state.data)
        if (props.perm === state.data) alert("You Win")
        else {
          alert("You Lose")
          setstate({ ...state, data: JSON.parse(JSON.stringify(props.perm)) })
        }
      }}>Submit</button>
      <button style={{
        margin: "5px",
        background: "white",
        color: "black",
        fontWeight: "bold",
        fontSize: "1.2em",
        padding: "5px",
        border: "2px solid black",
        cursor: "pointer",
        gridColumnStart: "10",
        gridColumnEnd: "12",
        gridRowStart: "3",
        gridRowEnd: "4",
      }} onClick={() => {
        setstate({ ...state, data: shuffle(state.data) })
      }}>Shuffle</button>
    </div>
  );
};

export default PeriodicTable;
