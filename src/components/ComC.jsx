import React, { useState } from "react";

const ComC = () => {
  const [cartValue, setCartValue] = useState(0);
  const [status, setStatus] = useState(true);

  const handleIncrement = () => {
    setStatus(false);
    setCartValue((cartValue) => cartValue + 1);
  };
  const handleDecrement = () => {
    setStatus(true);
    if (cartValue > 0) {     
      setCartValue((cartValue) => cartValue - 1);
      return;
    }
  };

  return (
    <div>
      <h1>Cart Component</h1>
      <p>Cart value : {cartValue}</p>

      {
        status ? 
        (<button onClick={handleIncrement}>Add to cart</button>)
        :
        (<button onClick={handleDecrement}>Remove from cart</button>)
      }
      
    </div>
  );
};

export default ComC;
