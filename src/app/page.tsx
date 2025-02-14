"use client"; 
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); 
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Next.js Calculator</h1>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-72">
        <div className="text-right text-lg mb-2 bg-gray-700 p-2 rounded-md min-h-[50px]">
          <p className="text-gray-400">{input}</p>
          <p className="text-2xl font-bold">{result}</p>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
            <button
              key={btn}
              onClick={() => (btn === "=" ? calculateResult() : handleClick(btn))}
              className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-md text-xl font-bold"
            >
              {btn}
            </button>
          ))}
          <button 
            onClick={clearInput} 
            className="col-span-4 bg-red-600 hover:bg-red-500 text-white p-3 rounded-md text-xl font-bold"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}
