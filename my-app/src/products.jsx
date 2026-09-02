import React from 'react'

function Products({name,data}) {
  return (
    <div className='w-full h-40 rounded-xl mt-2  bg-zinc-400 flex items-center justify-center'>
        Products
        <h2>{name}</h2>
        <h2>{data.age}</h2>
        <h2>{data.name}</h2>
    </div>
  )
}

export default Products