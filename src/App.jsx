import React, { useState } from 'react'
import ComA from './components/ComA';
import ComB from './components/Comb';
import ComC from './components/ComC';
import ComD from './components/ComD';

const App = () => {

  let a = 10;

  const [value, setValue] = useState(10);

  const handleClick = () => {
    setValue(value + 1);
  }

  return (
    <div>
      <h1>React Hooks</h1>
      {/* <h3>1. useState Hook</h3>
      <p>{value}</p>
      <button onClick={handleClick}>Click</button>


      <ComA value={value} setValue={setValue}/>
      <ComB a={a}/>
      */}

      <ComC /> 

      {/* <ComD /> */}

    </div>
  )
}

export default App
