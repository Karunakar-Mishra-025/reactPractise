import React from "react";
import { Link, Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div className="h-full bg-blue-900 flex justify-center items-center">
      <div className="flex gap-3 text-lg absolute top-[10%]">
        <Link className='px-4 py-1 border border-blue-500 transition duration-300 hover:border-white hover:bg-blue-500' to='/product/men'>Men</Link>
        <Link className='px-4 py-1 border border-blue-500 transition duration-300 hover:border-white hover:bg-blue-500' to='/product/women'>Women</Link>
        <Link className='px-4 py-1 border border-blue-500 transition duration-300 hover:border-white hover:bg-blue-500' to='/product/kids'>Kids</Link>
      </div>
      
      <Outlet />
      {/* <h1 className="text-3xl">Product Page</h1> */}
    </div>
  );
};

export default Home;
