import React from 'react'
import { useEffect } from 'react'

const ComD = () => {

  console.log("Component D Rendered outside useEffect");

    useEffect(() => {

      //mounting phase
      const interval = setInterval(() => {
        console.log("Interval running in Component D");
      }, 3000);
      return () => {
        //unmounting phase
        clearInterval(interval);
        console.log("Component D Unmounted - Cleanup function");
      } 
      
    }, []);

  return (
    <div>
      <h1>Component D</h1>
    </div>
  )
}

export default ComD
