import React from 'react'
import { useState } from 'react'
import Products from './products'
function App() {
  const [a, setA] = useState(0);
  return (
    <>
    <div className="w-full h-screen bg-zinc-800 p-1 text-white box-border">
    <h1 className='m-4'>{a}</h1>
    <button onClick={() => setA(a + 1)} className='w-20 h-10 bg-green-500 rounded-md'>Button</button>
    <Products name="Example Product" data ={{age: "25",name:  "John"}}/>
    </div>
    </>
  )
}

export default App