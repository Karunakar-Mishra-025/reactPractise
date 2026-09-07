import React from 'react'

const Container = (props) => {

  return (
    <div>
        <button onClick={()=>{
            props.setCount(props.count+1)
        }}>Increase Count</button>
    </div>
  )
}

export default Container