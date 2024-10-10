import React from "react";

function Music({values, index, handleAddFav}){
    const { name, artist, te, url, isAdded } = values;
    return (
        <div className="w-auto  bg-orange-100 p-5 rounded-lg flex gap-7 grow m-4 shadow-sx">
            <img className="h-40 w-40 object-cover rounded-lg" src={url} alt="" />
            <div className="flex flex-col gap-2 justify-between   ">
                <div>
                    <h4 className="text-xs text-gray-700 bg-gray-200 p-2 rounded-lg w-fit">{te} Music</h4>
                    <h1 className="text-xl">{name}</h1>
                    <img className="h-10 object-cover" src="https://cdn.pixabay.com/animation/2023/10/10/13/26/13-26-45-476_512.gif" alt="" />
                </div>
                <button onClick={()=>handleAddFav(index)} className={`${isAdded?"bg-green-500":"bg-orange-500"} p-1 rounded-md text-white text-md`}>{isAdded?"Remove":"Add to Favorite"}</button>
            </div>
        </div>
    )
}

export default Music;