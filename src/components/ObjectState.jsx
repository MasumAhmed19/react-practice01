import React, { useState } from "react";

function ObjectState() {
  const [object, setObject] = useState({
    name: "John Doe",
    age: 30,
    isValid: true,
  });

  return (
    <div className="container mx-auto p-10 space-y-4 bg-gray-100 rounded-lg shadow-sm">
      <h1 className="text-xl">Name: {object.name}</h1>
      <h1 className="text-xl">Age: {object.age}</h1>
      <h1 className="text-xl">Validity: {object.isValid.toString()}</h1>
      <button
        onClick={() => setObject({ ...object, isValid: !object.isValid })}
        className={`btn px-6 py-2 ${
          object.isValid ? "bg-green-700" : "bg-red-700"
        } text-white font-bold uppercase`}
      >
        Toggle
      </button>
    </div>
  );
}

export default ObjectState;
