import React from "react";
import { IoReorderThree } from "react-icons/io5";

type Props = {};

const NavBarSection = (props: Props) => {
  return (
    <nav className="flex flex-1  justify-between items-center">
      <h2 className="text-black font-bold">Countries</h2>
      <div className="block lg:hidden sm:hidden md:hidden">
        <IoReorderThree className="h-14 w-14" />
      </div>
      <div className="lg:flex md:flex sm:flex flex-row gap-4 hidden">
        <h5 className="text-black text-lg underline decoration-2 decoration-black">
          All
        </h5>
        <h5 className="text-gray-400 text-lg">Asia</h5>
        <h5 className="text-gray-400 text-lg">Europe</h5>
      </div>
    </nav>
  );
};

export default NavBarSection;
