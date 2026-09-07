import React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
    const params=useParams()
  return (
    <div className="h-full bg-blue-900 flex justify-center items-center">
      <h1 className="text-3xl">Course Details Page</h1> 
      <h1>Course Name - {params.courseName}</h1>
    </div>
  );
};

export default Home;
