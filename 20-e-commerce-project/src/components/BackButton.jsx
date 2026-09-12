import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate()
    const location = useLocation()
    if(location.pathname == '/') return null
  return (
    <div>
      <button onClick={() =>{
        navigate(-1)
      }} className="absolute top-[15%] left-4 group flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-x-1 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white hover:shadow-xl hover:shadow-black/20 cursor-pointer ">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="transition-transform duration-300 group-hover:-translate-x-1"
        >
          {" "}
          <path
            d="M19 12H5M5 12L10 7M5 12L10 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
        </svg>{" "}

        <span>Back</span>{" "}
      </button>
    </div>
  );
};

export default BackButton;
