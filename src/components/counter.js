import React, { useState } from "react";

export default function Counter({ value, onMinus, onPlus }) {
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => onMinus()}>-</button>
      <strong>{value}</strong>
      <button onClick={() => onPlus()}>+</button>
    </div>
  );
}

// export default class Counter extends React.Component {
//   componentDidUpdate(prevProps, prevState) {
//     console.log(prevProps)
//   }

//   render() {
//     return (
//       <div style={{ textAlign: "center" }}>
//         <button onClick={() => this.props.onMinus()}>-</button>
//         <strong>{this.props.value}</strong>
//         <button onClick={() => this.props.onPlus()}>+</button>
//       </div>
//     );
//   }
// }
