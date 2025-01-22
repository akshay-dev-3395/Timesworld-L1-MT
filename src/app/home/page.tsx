import Carousels from "@/components/HomeScreenComponent/Carousels";
import WelcomeTitle from "@/components/HomeScreenComponent/WelcomeTitle";
import { IMAGES } from "@/hooks/static";
import React from "react";

const HomeScreen = () => {
  return (
    <div className="flex flex-col h-screen">
      <WelcomeTitle />
      <Carousels />
    </div>
  );
};

export default HomeScreen;
