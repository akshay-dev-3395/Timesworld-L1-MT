"use client";
import React, { useState } from "react";
import { IoReorderThree, IoCloseCircle } from "react-icons/io5";

type Props = {
  onPressNavLink: (name: string) => void;
  filterCountry: string;
};

const NavBarSection = (props: Props) => {
  const { onPressNavLink, filterCountry } = props;
  const [isClickIcon, setIsClickIcon] = useState<boolean>(false);

  const handleClick = () => {
    setIsClickIcon((prev) => !prev);
  };

  const onClickMobList = (type: string) => {
    if (type != filterCountry) {
      onPressNavLink(type);
      handleClick();
    }
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
          <h5
            onClick={() => onPressNavLink("all")}
            className=" text-lg decoration-2 decoration-black cursor-pointer"
            style={{
              textDecoration: filterCountry === "all" ? "underline" : "none",
              color: filterCountry === "all" ? "#000" : "#9ca3af",
            }}
          >
            All
          </h5>
          <h5
            onClick={() => onPressNavLink("Asia")}
            className=" text-lg decoration-2 decoration-black cursor-pointer"
            style={{
              textDecoration: filterCountry === "Asia" ? "underline" : "none",
              color: filterCountry === "Asia" ? "#000" : "#9ca3af",
            }}
          >
            Asia
          </h5>
          <h5
            onClick={() => onPressNavLink("Europe")}
            className=" text-lg decoration-2 decoration-black cursor-pointer"
            style={{
              textDecoration: filterCountry === "Europe" ? "underline" : "none",
              color: filterCountry === "Europe" ? "#000" : "#9ca3af",
            }}
          >
            Europe
          </h5>
        </div>
      </div>
      {isClickIcon && (
        <div className="bg-slate-900 px-4 py-6 flex flex-col gap-3 absolute z-10 w-full">
          <h5
            className="text-lg decoration-2 decoration-white"
            onClick={() => onClickMobList("all")}
            style={{
              textDecoration: filterCountry === "all" ? "underline" : "none",
              color: filterCountry === "all" ? "#fff" : "#9ca3af",
            }}
          >
            All
          </h5>
          <h5
            className="text-lg decoration-2 decoration-white"
            onClick={() => onClickMobList("Asia")}
            style={{
              textDecoration: filterCountry === "Asia" ? "underline" : "none",
              color: filterCountry === "Asia" ? "#fff" : "#9ca3af",
            }}
          >
            Asia
          </h5>
          <h5
            className=" text-lg decoration-2 decoration-white"
            onClick={() => onClickMobList("Europe")}
            style={{
              textDecoration: filterCountry === "Europe" ? "underline" : "none",
              color: filterCountry === "Europe" ? "#fff" : "#9ca3af",
            }}
          >
            Europe
          </h5>
        </div>
      )}
    </nav>
  );
};

export default NavBarSection;
