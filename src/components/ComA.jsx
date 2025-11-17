import React from 'react'

const ComA = ({value, setValue}) => {

    const addValue = () => {
        setValue(value + 1);
    }

  return (
    <div>
      <h1>ComA state management : {value}</h1>
      <button onClick={addValue}>Add</button>
    </div>
  )
}

export default ComA
