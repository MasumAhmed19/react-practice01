import React, { act, useState } from "react";
import Cards from "./components/Cards";
import StateLearn from "./components/StateLearn";
import ObjectState from "./components/ObjectState";
import ArrayLastElementRemove from "./components/ArrayLastElementRemove";
import CardsProps from "./components/CardsProps";
import Music from "./components/Music";
import Trending from "./components/Trending";

function App(){

  const data = [
    {name:"Alexander", profession:"Doctor", image:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dz", isFriend:false},
    {name:"Hartian", profession:"Police", image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isFriend:false},
    {name:"Plurendra", profession:"Engineer", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0fGVufDB8fDB8fHww", isFriend:false},
  ]

  let [realData, setRealData] = useState(data)

  let handler = (activeIdx) => {
    // alert(activeIdx)
    setRealData((prev)=>{
        return prev.map((el,i)=>{
            if(i===activeIdx){
              return {...el, isFriend: !el.isFriend}
            }else{
              return el
            }
        })
    })
  }

  const musicData = [
    {name:"Nile nile amber par", te:"Pop", artist:"Artist 1", url:"https://plus.unsplash.com/premium_photo-1728568724868-5d24ac1238ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8", isAdded:false},
    {name:"O mere dilke chen", te:"Rap", artist:"Artist 2", url:"https://images.unsplash.com/photo-1728216593412-24cffa8f757b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D", isAdded:false},
    {name:"Wild wold 1971", te:"Disco", artist:"Artist 3", url:"https://images.unsplash.com/photo-1727946238611-f40feae6e4c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D", isAdded:false},
    {name:"Premika ne pyar se", te:"Pop", artist:"Artist 4", url:"https://images.unsplash.com/photo-1728321596244-4fabb68c3ac3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D", isAdded:false},
    {name:"Teri yaad ati hain", te:"Disco", artist:"Artist 5", url:"https://plus.unsplash.com/premium_photo-1728322729173-401ae452c4f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D", isAdded:false},
    {name:"Sasoon ki mala", te:"Rap", artist:"Artist 6", url:"https://images.unsplash.com/photo-1728414452665-e3f5c286426f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D", isAdded:false},
  ]

  let [musicInfo, setMusicData]= useState(musicData)
  
  const handleAddFav = (idx) =>{
    // console.log(alert(idx));
    setMusicData((prev)=>{
      return prev.map((el, i)=>{
        if(idx===i) return {...el, isAdded:!el.isAdded}
        else return el 
      })
    })
  }

  return (
    <div>
      
      <StateLearn />

      <ObjectState />

      <ArrayLastElementRemove />

      <div className="container mx-auto flex gap-5 min-h-screen my-10 items-center justify-center flex-wrap">
          {realData.map((items, idx)=>(
            // <CardsProps name={items.name} profession={items.profession} image={items.image} />
            <CardsProps key={idx} index={idx} values={items}  handler={handler}/>
          ))}
      </div>

      <Trending values={musicInfo} />

      <div className="container mx-auto grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-7 py-[100px] ">
        {musicInfo.map((obj, idx)=>(
          <Music values={obj} key={idx} index={idx} handleAddFav={handleAddFav} />
        ))}
      </div>


    </div>
  );
}

export default App;