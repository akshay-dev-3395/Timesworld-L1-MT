import React from "react";

type Props = {};

const WelcomeTitle = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 mt-10 justify-between">
      <div className="h-1 bg-black  lg:flex-1 lg:flex" />
      <h1 className="text-5xl font-bold text-center">WELCOME</h1>
      <div className="h-1 bg-black  lg:flex-1 lg:flex lg:self-end" />
    </div>
  );
};

export default WelcomeTitle;
