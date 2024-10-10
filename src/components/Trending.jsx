import React from "react";

function Trending({ values }) {
  console.log(values);

  return (
    <div className="bg-orange-500 py-[20px] px-[10px]">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-4xl text-white font-extralight">Trending Packs</h2>
        <button className="text-xl bg-white px-4 py-2 rounded-lg">
          Favorites{" "}
          <span>
            {
              values.filter((el) => el.isAdded).length
            }
          </span>
        </button>
      </div>
    </div>
  );
}

export default Trending;
