import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";

const App = () => {
  const [index, setindex] = useState(1);
  const [userData, setuserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setuserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h1 className="absolute text-zinc-500 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      Loading ...
    </h1>
  );
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }
  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-8">
      <h1 className="text-3xl font-bold tracking-tight">Photo Gallery</h1>

      <p className="mt-1 text-zinc-500">Explore beautiful photos from Picsum</p>
      <div
        className=" h-[82%] grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4 gap-4 overflow-auto p-2"
        >
        {printUserData}
      </div>
      <div className="flex w-full justify-center items-center gap-4 ">
        <button
          onClick={() => {
            if (index > 1) setindex(index - 1);
            console.log(index);
          }}
          className={`bg-violet-500 px-5 py-2 rounded-lg cursor-pointer ${
            index === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-violet-600"
          }`}
        >
          Previous
        </button>
        <h1 className=" text-lg text-zinc-100">Page {index}</h1>
        <button
          onClick={() => {
            setindex(index + 1);
          }}
          className="bg-violet-500 cursor-pointer active:scale-[95%] px-5 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
