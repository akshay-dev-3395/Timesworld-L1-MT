import Carousels from "@/components/HomeScreenComponent/Carousels";
import CountryList from "@/components/HomeScreenComponent/CountryList";
import Footer from "@/components/HomeScreenComponent/Footer";
import NavBarSection from "@/components/HomeScreenComponent/NavBarSection";
import WelcomeTitle from "@/components/HomeScreenComponent/WelcomeTitle";
import React from "react";

const HomeScreen = () => {
  return (
    <div className="h-screen flex flex-col">
      <NavBarSection />
      <WelcomeTitle />
      <Carousels />
      <CountryList />
      <Footer />
    </div>
  );
};

export default HomeScreen;
