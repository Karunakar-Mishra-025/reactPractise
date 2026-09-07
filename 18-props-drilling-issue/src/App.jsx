import React, { useState } from 'react'
import Container from './components/Container'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>The current count is : {count}</h1>
      <Container count={count} setCount={setCount}  />
    </div>
  )
}

export default App