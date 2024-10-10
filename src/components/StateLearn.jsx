import React, { useState } from "react";

function StateLearn(){

    const [score, setScore] = useState(21)

    return(
        <>
            <div className="flex items-center gap-5 py-10 justify-center ">
                <button onClick={()=>setScore((prev)=>prev+1)} className="btn px-8 py-4 bg-blue-600 text-white uppercase font-bold ">increase</button>
                <button onClick={()=>setScore((prev)=>prev-1)} className="btn px-8 py-4 bg-red-600 text-white uppercase font-bold ">decrease</button>
                <h2 className="text-3xl">{score}</h2>
            </div>
            
        </>
    )
}

export default StateLearn;