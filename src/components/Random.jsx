import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const Random = () => {
  
  const {gif, loading, fetchData} = useGif();


  return (
    <div className="w-1/2  bg-green-500 rounded-2xl border-[2px] border-black flex flex-col items-center">
      <h1 className="text-2xl underline uppercase font-extrabold mt-4">
        Random Gif
      </h1>
      
      {
        loading ? <Spinner /> : <img src={gif} alt="gif" width={450} />
      }
      <button
        className=" mt-[20px]  mb-4 w-3/4 py-2 border-[2px] text-lg rounded-lg bg-green-200 border-black"
        onClick={() => fetchData()}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
