import { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(true);

  console.log("toggle value : ",toggle)
  return (
    <div>
        <h1>{toggle === true ? 'Switch Is On' : 'Switch is off'}</h1>
      <button 
      style={{ width: 100, height: 40 }}
      onClick={()=> setToggle(!toggle)}
      >
        {toggle === true ? "On" : "Off"}
      </button>
    </div>
  );
}
