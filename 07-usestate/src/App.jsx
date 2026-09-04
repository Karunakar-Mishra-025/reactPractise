import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  function increaseNum(){
    setNum(num+1)
  }
  function decreaseNum(){
    setNum(num-1)
  }
  function increaseNumBy5(){
    setNum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button><br />
      <button onClick={increaseNumBy5}>Increase by 5</button>
    </div>
  )
}

export default App