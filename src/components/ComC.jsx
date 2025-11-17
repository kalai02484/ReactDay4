import React, { useState } from "react";

const ComC = () => {
  const [cartValue, setCartValue] = useState(0);

  const handleIncrement = () => {
    setCartValue((cartValue) => cartValue + 1);
  };
  const handleDecrement = () => {
    if (cartValue > 0) {
      setCartValue((cartValue) => cartValue - 1);
      return;
    }
  };

  return (
    <div>
      <h1>Cart Component</h1>
      <p>Cart value : {cartValue}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default ComC;
