"use client";

import React, { useMemo } from "react";
import ButtonComponent from "../CommonComponent/ButtonComponent";
import Image from "next/image";
import { useAppSelector } from "@/store/useStoreHook";
import Placeholder from "react-bootstrap/Placeholder";
import Card from "react-bootstrap/Card";

type Props = {
  onPressLoadMore: () => void;
  countryList: any[];
  isLoading: boolean;
  filterCountry: string;
};

const CountryList = (props: Props) => {
  const { isLoading, countryList, onPressLoadMore, filterCountry } = props;
  const { countryData } = useAppSelector((state) => state.homeReducer);

  const isVisibleButton = useMemo(() => {
    if (filterCountry === "all") {
      return Boolean(countryData.length === countryList.length);
    }

    const newArray = countryData.filter(
      (item: any) => item?.region == filterCountry
    );

    return Boolean(newArray.length === countryList.length);
  }, [filterCountry, countryData, countryList]);

  if (isLoading) {
    return (
      <div className="my-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {Array(10)
            .fill(5)
            .map((_, index) => (
              <Card
                key={`image-${index}`}
                className="flex flex-row items-center border-2 rounded p-2 bg-white shadow-sm mb-2 h-24"
              >
                <div className="h-16 w-16 rounded bg-gray-300"></div>
                <Card.Body>
                  <Placeholder
                    animation="glow"
                    bg="light"
                    className="flex flex-col gap-1"
                  >
                    <Placeholder xs={7} />
                    <Placeholder xs={3} />
                  </Placeholder>
                </Card.Body>
              </Card>
            ))}
        </div>
      </div>
    );
  }

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
