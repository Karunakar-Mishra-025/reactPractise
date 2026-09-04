import React, { useState } from 'react'

const App = () => {
  const [arr, setarr] = useState({user:"Arrav" , age: 29})
  function changeArr(params) {
    // setarr({user:"Aman",age:30}) // when we get a completely new array and don't need to worry about what it had previously
    // const newArr ={...arr}
    // newArr.user="Aman"
    // newArr.age=70
    // setarr(newArr);// safer way for when we don't have a complete new object and neet to change only few things

    setarr(prev =>({...prev,user:"Hello",age:30})); // when the state's value depends on the preious value like count = count +1

  }
  return (
    <div>
      <h1>{arr.user}, {arr.age}</h1>
      <button onClick={changeArr}>Change</button>
    </div>
  )
}

export default App