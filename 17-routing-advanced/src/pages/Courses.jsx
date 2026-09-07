import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-full bg-blue-900 flex justify-center items-center">
      <h1 className="text-3xl">Courses Page</h1>
      <Link to='/course-details/java' >Course Details Page</Link>
    </div>
  );
};

export default Home;
