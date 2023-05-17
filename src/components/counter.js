import { useState } from "react";

export default function Counter({value, onMinus, onPlus}) {

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={()=> onMinus()}>-</button>
      <strong>{value}</strong>
      <button onClick={() => onPlus()}>+</button>
    </div>
  );
}
