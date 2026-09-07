import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='absolute w-full top-0 flex justify-between bg-gray-600 items-center py-2 px-8'>
        <h2>Router Project</h2>
        <div className='flex gap-8'>
            <h2 className='bg-cyan-700 py-2 px-4 hover:bg-cyan-500 transition' ><Link to='/'>Home</Link></h2>
            <h2 className='bg-cyan-700 py-2 px-4 hover:bg-cyan-500 transition ' ><Link to='/about'>About</Link></h2>
            <h2 className='bg-cyan-700 py-2 px-4 hover:bg-cyan-500 transition ' ><Link to='/contact'>Contact</Link></h2>
            <h2 className='bg-cyan-700 py-2 px-4 hover:bg-cyan-500 transition ' ><Link to='/product'>Products</ Link></h2>
        </div>
    </div>
  )
}

export default Navbar