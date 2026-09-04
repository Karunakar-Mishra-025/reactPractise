import React from 'react'

const App = () => {
  
  return (
    <div>
      <div onMouseMove={function(params) {
        console.log(params.screenX, params.screenY)
      }} className="container"></div>
      <button onClick={function (params) {
        clicked(params)
      }}
      onDoubleClick={function (params) {
        console.log("double clicked  : "+ params)
      }}
      >Click Me</button>
      <input type="text" name="name" id="name" 
      onChange={function (params){
        console.log("value changed to  : "+params.target.value)
      }}
      placeholder='Enter Your Name'/>
    </div>
  )
}

export default App