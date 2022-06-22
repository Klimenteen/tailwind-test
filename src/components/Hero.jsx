import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgImg from "../assets/monkmain.png";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex flex-col  justify-center md:items-start   w-full  px-2 py-8">
              <p className="text-2xl">Reject humanity return to monke</p>
              <h1 className="py-3 text-5xl md:text-7xl font-bold">Bananas <br /> are delicious</h1>
              <p className="text-2xl">This is our Philosophy</p>
              <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
          </div>
          <div className="bg-zinc-200 " >
              <img className="w-full h-auto " src={bgImg} alt="main logo" />
          </div>
          <div className="absolute flex flex-col py-2 sm:py-8 w-full box-border md:max-w-[760px] bottom-[5%]  md:left-1/2 
           transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">


 <p>Banana Services</p>
              <div className="flex justify-between flex-wrap px-4"> 
                  <p className="flex px-4 py-2 text-slate-500"><CloudUploadIcon className="h-6 text-amber-400" />Banana</p>
                  <p className="flex px-4 py-2 text-slate-500">< DatabaseIcon className="h-6 text-amber-400" /> Banana</p>
                  <p className="flex px-4 py-2 text-slate-500"><ServerIcon className="h-6 text-amber-400"/> Banana</p>
                  <p className="flex px-4 py-2 text-slate-500 text-left w-[133px]"><PaperAirplaneIcon className="h-6 text-amber-400"/> Banana</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;


