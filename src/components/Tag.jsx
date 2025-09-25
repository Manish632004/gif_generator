import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const Tag = () => {
  const [tag, setTag] = useState("car");
  const {gif, loading, fetchData} = useGif(tag);



  return (
    <div className="w-1/2  bg-blue-500 rounded-2xl border-[2px] border-black flex flex-col items-center">
      <h1 className="text-2xl underline uppercase font-extrabold mt-4">
        Random {tag} Gif
      </h1>
      
      {
        loading ? <Spinner /> : <img src={gif} alt="gif" width={450} />
      }

      <input  className="mt-[20px] mb-4 w-3/4 py-2 border-[2px] text-lg text-center rounded-lg bg-white border-black" type="text" placeholder="Enter tag"
      onChange={ (event) => setTag(event.target.value)}
      value={tag} />
      
      <button
        className=" mt-[20px]  mb-4 w-3/4 py-2 border-[2px] text-lg rounded-lg bg-green-200 border-black"
        onClick={()=>fetchData(tag)}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
