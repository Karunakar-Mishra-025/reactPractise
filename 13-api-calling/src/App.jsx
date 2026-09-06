import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([])
  const getData =async ()=>{
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    // setData(await response.json())
    // console.log(data)

    // using axios 
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setData(response.data)
  }
  return (
    <div>
      <h1>API's Response</h1>
      <button onClick={getData}>Get Data</button>
      {
        data.map(function (params,idx) {
          return (
            <div key={idx}>
              <h2>{params.title}</h2>
              <p>{params.body}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default App