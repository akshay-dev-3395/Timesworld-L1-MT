import Footer from "@/components/HomeScreenComponent/Footer";
import NavBarSection from "@/components/HomeScreenComponent/NavBarSection";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="lg:px-24  lg:py-10 p-10 ">
      {/* <NavBarSection /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
