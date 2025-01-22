"use client";

import React from "react";
import ButtonComponent from "../CommonComponent/ButtonComponent";
// import Card from "react-bootstrap/Card";
type Props = {};

const CountryList = (props: Props) => {
  return (
    <div className="my-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {Array(10)
          .fill(5)
          .map((_, index) => (
            <div className="flex flex-row items-center border-2 rounded p-2 bg-white shadow-sm mb-2">
              <img
                src="/images/img7.jpg"
                className="h-16 w-16 object-cover rounded"
              />
              <div className="ml-3">
                <h4 className="m-0 text-black">Card Title</h4>
                <p className="text-gray-500">sdfnbsjd</p>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center">
        <ButtonComponent
          label="Load more"
          buttonStyle="h-10"
          onPress={() => {}}
        />
      </div>
    </div>
  );
};

export default CountryList;
