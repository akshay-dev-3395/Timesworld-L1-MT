"use client";
import { IMAGES } from "@/hooks/static";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./corousalStyle.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

type Props = {};

type PaginationType = {
  goToPrev: () => void;
  goToNext: () => void;
  currentIndex: number;
};

const Pagination = (props: PaginationType) => {
  const { goToPrev, goToNext, currentIndex } = props;
  return (
    <div className="absolute bottom-[5%] flex flex-row w-full items-center justify-center">
      <div className="flex flex-row items-center gap-3">
        <IoIosArrowDropleftCircle
          className="h-10 w-10 text-white"
          onClick={goToPrev}
        />
        {IMAGES.map((item, index) => (
          <div
            key={item.id}
            style={{
              backgroundColor: currentIndex == index ? "#fff" : "#6b7280",
            }}
            className="h-3 w-3 rounded-full bg-gray-500"
          />
        ))}
        <IoIosArrowDroprightCircle
          className="h-10 w-10 text-white"
          onClick={goToNext}
        />
      </div>
    </div>
  );
};

const Carousels = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    if (currentIndex != 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex != IMAGES.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="h-[60%]  lg:gap-5 gap-3 flex flex-col lg:mt-10 mt-10 lg:flex-row-reverse">
      <div className="h-[40%] lg:w-1/4 lg:h-full ">
        <img
          src={"/images/img7.jpg"}
          alt="first image"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="h-[60%]  lg:w-3/4 lg:h-full relative">
        <Carousel
          slide={false}
          controls={false}
          activeIndex={currentIndex}
          indicators={false}
          className=" bg-black"
        >
          {IMAGES.map((item, index) => (
            <Carousel.Item key={item.id} className="">
              <img
                src={item.url}
                alt={`image-${item.id}`}
                className="w-full h-full object-cover"
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Pagination
          goToPrev={goToPrev}
          goToNext={goToNext}
          currentIndex={currentIndex}
        />
      </div>
    </div>
  );
};

export default Carousels;
