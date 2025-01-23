"use client";

import React from "react";
import ButtonComponent from "../CommonComponent/ButtonComponent";
import Image from "next/image";
import { useAppSelector } from "@/store/useStoreHook";
// import Card from "react-bootstrap/Card";
type Props = {
  onPressLoadMore: () => void;
  countryList: any[];
  isLoading: boolean;
};

const CountryList = (props: Props) => {
  const { isLoading, countryList, onPressLoadMore } = props;
  const { countryData } = useAppSelector((state) => state.homeReducer);

  const isVisibleButton = Boolean(countryData.length === countryList.length);

  return (
    <div className="my-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {countryList.map((item, index) => (
          <div
            key={`image-${index}`}
            className="flex flex-row items-center border-2 rounded p-2 bg-white shadow-sm mb-2"
          >
            <Image
              src={item?.flag}
              className="h-16 w-16 object-cover rounded"
              width={64}
              height={64}
              alt={`image-${index}`}
            />
            <div className="ml-3">
              <h4 className="m-0 text-black">{item?.name}</h4>
              <p className="text-gray-500">{item?.region}</p>
            </div>
          </div>
        ))}
      </div>
      {!isVisibleButton && (
        <div className="flex justify-center">
          <ButtonComponent
            label="Load more"
            buttonStyle="h-10"
            onPress={onPressLoadMore}
          />
        </div>
      )}
    </div>
  );
};

export default CountryList;
