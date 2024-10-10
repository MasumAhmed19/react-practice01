import React from "react";

function CardsProps({ values , handler, index}) {
    const {name, profession, image, isFriend} = values
     
  return (
    <div className="w-60 bg-gray-200 p-3 rounded-lg">
      <div className="h-52 bg-blue-400 rounded-lg overflow-hidden">
        <img className="object-cover" src={image} alt="" />
      </div>
      <div className="flex flex-col py-2 justify-start items-start">
        <h2 className="text-md text-gray-400">{profession}</h2>
        <h2 className="text-lg font-semibold">{name}</h2>
        <div className="flex gap-4 items-center justify-center">

            <button
              onClick={() => {
                handler(index)
              }}
              className={`mt-3 font-semibold ${isFriend? "bg-green-500":"bg-blue-500"} text-white uppercase px-3 py-1 rounded-md`}>
              {isFriend?"Friend":"Add Friend"}
            </button>
            {/* <button onClick={()=>{
              handler(index)
            }} className="bg-red-500 text-white uppercase px-3 py-1 rounded-md">Remove</button> */}

            {isFriend?<button onClick={()=>{
              handler(index)
            }} className="bg-red-500 text-white mt-3  uppercase px-3 py-1 rounded-md">Remove</button>:""}
        </div>
      </div>
    </div>
  );
}

export default CardsProps;
