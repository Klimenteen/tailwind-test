import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed  drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl ">Brand.</h1>
          <ul className="hidden md:flex ">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4 ">
            Sing In
          </button>
          <button className="px-8 py-3">Sing Out</button>
        </div>

        <div onClick={handleClick} className="md:hidden">
          {!nav ? <MenuIcon className="w-5 " /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav?'h-0 overflow-hidden':'absolute bg-zinc-200 w-full px-8  transition-all duration-1000 h-fit '}>
        <li className="border-b-2 border-zinc-300 w-full h-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full h-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full h-full">Support</li>
        <li className="border-b-2 border-zinc-300 w-full h-full">Platforms</li>
        <li className="border-b-2 border-zinc-300 w-full h-full">Pricing</li>
        <div className="flex flex-col my-4">
          <button className=" bg-transparent text-indigo-600 px-8 py-3 mb-4 ">
            Sing In
          </button>
          <button className="px-8 py-3">Sing Out</button>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
