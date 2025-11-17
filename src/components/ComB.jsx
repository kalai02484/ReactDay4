import React from 'react'

const ComB = ({a}) => {

    const handleClick = () => {
        a = a + 1;
        console.log(a);
    }

  return (
    <div>
      <h1>ComB props state : {a}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default ComB
