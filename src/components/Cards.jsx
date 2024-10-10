import React from "react";

function Cards() {
  let arr = [
    {
      id: 1,
      title: "Coco",
      content:
        "This male African Grey rabbit is a small, friendly companion born on April 20, 2022.",
      url: "https://i.ibb.co.com/s3PXSwD/pet-3.jpg",
    },
    {
      id: 2,
      title: "Nibbles",
      content:
        "This adorable female Holland Lop rabbit, born on June 30, 2023, is known for her calm and gentle nature. ",
      url: "https://i.ibb.co.com/4g3Jrjf/pet-4.jpg",
    },
    {
      id: 3,
      title: "Pip",
      content:
        "This tiny male Netherland Dwarf rabbit, born on May 10, 2023, is perfect for small spaces. ",
      url: "https://i.ibb.co.com/f4MRfWZ/pet-13.jpg",
    }
  ];

  return (
    <div className="bg-zinc-100 w-full h-screen flex items-center justify-center gap-10 p-5  flex-wrap">

        {arr.map((item, idx) => (
            <div key={item.id} className="w-1/3 md:w-1/4 p-5 bg-white rounded-lg shadow-md">
                <img className="object-cover w-full h-[220px]" src={item.url} alt={item.title} />
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="text-sm">{item.content}</p>
            </div>
        ))}



    </div>
  );
}

export default Cards;
