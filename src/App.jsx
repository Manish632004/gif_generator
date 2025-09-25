import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-max flex flex-col background items-center">
    

    <h1 className="bg-white text-center max-w-max px-[40rem] py-1 rounded-md mt-[40px] text-2xl font-bold">RANDOM GIFS</h1>
    <div className="flex flex-col gap-4 w-full items-center mt-[40px]">
      <Random/>
      <Tag/>
    </div>
    </div>
  )
}
