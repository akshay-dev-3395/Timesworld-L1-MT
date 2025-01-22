"use client";
import React, { useState } from "react";
import { IoReorderThree, IoCloseCircle } from "react-icons/io5";

type Props = {};

const NavBarSection = (props: Props) => {
  const [isClickIcon, setIsClickIcon] = useState<boolean>(false);

  const handleClick = () => {
    setIsClickIcon((prev) => !prev);
  };

  return (
    <nav className="relative">
      <div className="flex flex-1 justify-between items-center">
        <h2 className="text-black font-bold">Countries</h2>
        <div
          className="block lg:hidden sm:hidden md:hidden"
          onClick={handleClick}
        >
          {isClickIcon ? (
            <IoCloseCircle className="h-14 w-14" />
          ) : (
            <IoReorderThree className="h-14 w-14" />
          )}
        </div>
        <div className="lg:flex md:flex sm:flex flex-row gap-4 hidden">
          <h5 className="text-black text-lg underline decoration-2 decoration-black">
            All
          </h5>
          <h5 className="text-gray-400 text-lg">Asia</h5>
          <h5 className="text-gray-400 text-lg">Europe</h5>
        </div>
      </div>
      {isClickIcon && (
        <div className="bg-slate-900 px-4 py-6 flex flex-col gap-3 absolute z-10 w-full">
          <h5 className="text-white text-lg">All</h5>
          <h5 className="text-white text-lg">Asia</h5>
          <h5 className="text-white text-lg">Europe</h5>
        </div>
      )}
    </nav>
  );
};

export default NavBarSection;
