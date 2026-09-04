import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name, setName] = useState("abc")
  function submitHandler(e) {
    e.preventDefault()
    console.log("Entered Name : "+name)
  }
  function changeName(name) {
    setName(name);
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
        }}>
        <input type="text" value={name} 
        onChange={(obj)=>{
          changeName(obj.target.value)
        }}
         name="name" id="name" placeholder='Enter Your Name'/>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App