import React, { useState } from 'react'

const App = () => {
  const [user, setuser] = useState({name:"Hello",age:24})
  localStorage.setItem("user",JSON.stringify(user))
  localStorage.removeItem("")
  const getUser=JSON.parse(localStorage.getItem("user"));
  console.log("LocalStorage Length : "+localStorage.length)
  console.log(localStorage.key(0));
  localStorage.clear()
  return (
    <div>{getUser.name} {getUser.age}</div>
  )
}

export default App