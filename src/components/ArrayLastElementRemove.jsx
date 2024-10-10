import React, { useState } from "react";

function ArrayLastElementRemove() {
  let [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <div className="container mx-auto p-10 bg-gray-100 mt-10">
      <div className="flex gap-5">
        {arr.map((item) => (
          <h1 className=" px-6 rounded-full py-2 bg-gray-200">{item}</h1>
        ))}
      </div>

      <button
        onClick={() =>
          setArr(() => arr.slice(0,-1))
        //   setArr(() => arr.filter((el, index) => index != arr.length - 1))
        //   setArr([1,2,3,4,5])
        }
        className="bg-red-500 text-white font-bol mt-5 px-5 py-2 rounded-full"
      >
        Remove the last
      </button>
    </div>
  );
}

export default ArrayLastElementRemove;
