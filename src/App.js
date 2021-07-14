import React, { useState } from 'react'
import './App.css';

function App() {
  const [Hrange,setHrange] = useState(10);
  const [Vrange,setVrange] = useState(10);
  const [Brange,setBrange] = useState(10);
  const [color,setColor] = useState("black");
  const [check,setCheckOn] = useState(false);
  const [bgColor,setBgColor] = useState("white");
  const [txtColor,setTxtColor] = useState("black");


  
  return (
    <>
    <div className="App">
    <div className="controls">
    <input type="range" id="test5" min="-200" max="200" value={Hrange} onChange={(e)=>setHrange(e.target.value)} />
    <input type="range" id="test6" min="-200" max="200" value={Vrange} onChange={(e)=>setVrange(e.target.value)} />
    <input type="range" id="test7" min="0" max="200" value={Brange} onChange={(e)=>setBrange(e.target.value)} /><br/><br/>
    <input type="color"  value={color} onChange={(e)=>setColor(e.target.value)} /><br/><br/>
    <div class="switch">
    <label>
      outline
      <input type="checkbox" checked={check} onChange={() =>setCheckOn(!check)}/>
      <span class="lever"/>
      inset
    </label>
    <br/><br/><br/>
    <input type="color" value={bgColor} onChange={(e)=>setBgColor(e.target.value)} /><br/><br/>
    <input type="color" value={txtColor} onChange={(e)=>setTxtColor(e.target.value)} />

  </div>
    </div>
    <div className="output">
    <div className="box" style={{boxShadow:`${check? "inset" : ""} ${Hrange}px ${Vrange}px ${Brange}px ${color} `, backgroundColor:`${bgColor}`, color:`${txtColor}` }}>

    <h5>box-shadow: {Hrange}px {Vrange}px {Brange}px {color}</h5>
    </div>
    </div>
    
    </div>
    </>
  );
}

export default App;
