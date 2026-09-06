import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);
  const [num2, setnum2] = useState(0);

  //  This will Get called when anything in front end is rendered or changed
  function loaded() {
    console.log("React Loaded");
  }
  loaded();
  // therefore we use useEffect which will get loaded when a specified thing is changed

  // This will run  only when num is changed 
  useEffect(() => {
    console.log("Num is Changed");
  }, [num]);

  // This will run only when the num2 is changes
  useEffect(() => {
    console.log("Num 2 is Changed");
  }, [num2 ]);
  return (
    <div>
      <h1>Num 1 : {num}</h1>
      <h1>Num 2 : {num2}</h1>
      <button
        onClick={() => {
          setnum(num + 1);
        }}
      >
        Click here{" "}
      </button>
      <button
        onClick={() => {
          setnum2(num2 + 1);
        }}
      >
        Click here{" "}
      </button>
    </div>
  );
};

export default App;
