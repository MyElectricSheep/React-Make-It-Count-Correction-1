import React from "react";

const Counter = ({ value, id, onIncrement, onDecrement }) => {
  return (
    <>
      <button onClick={() => onDecrement(id)}>-</button>
      <span> Counter value is {value} </span>
      <button onClick={() => onIncrement(id)}>+</button>
    </>
  );
};
export default Counter;

// const Counter = ({ value, id, onModify }) => {
//   return (
//     <>
//       <button onClick={() => onModify(id, "subtract")}>-</button>
//       <span> Counter value is {value} </span>
//       <button onClick={() => onModify(id, "add")}>+</button>
//     </>
//   );
// };
// export default Counter;
