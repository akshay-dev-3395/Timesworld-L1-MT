"use client";

import Carousels from "@/components/HomeScreenComponent/Carousels";
import CountryList from "@/components/HomeScreenComponent/CountryList";
import Footer from "@/components/HomeScreenComponent/Footer";
import NavBarSection from "@/components/HomeScreenComponent/NavBarSection";
import WelcomeTitle from "@/components/HomeScreenComponent/WelcomeTitle";
import React from "react";
import useHomeHook from "./useHomeHook";

const HomeScreen = () => {
  const [
    onPressLoadMore,
    isLoading,
    countryList,
    onPressNavLink,
    filterCountry,
  ] = useHomeHook();
  return (
    <div className="h-screen flex flex-col">
      <NavBarSection
        onPressNavLink={onPressNavLink}
        filterCountry={filterCountry}
      />
      <WelcomeTitle />
      <Carousels />
      <CountryList
        onPressLoadMore={onPressLoadMore}
        countryList={countryList}
        isLoading={isLoading}
        filterCountry={filterCountry}
      />
      <Footer />
    </div>
  );
};

export default HomeScreen;
