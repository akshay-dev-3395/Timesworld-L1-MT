"use client";

import React, { useMemo } from "react";
import ButtonComponent from "../CommonComponent/ButtonComponent";
import Image from "next/image";
import { useAppSelector } from "@/store/useStoreHook";
import Placeholder from "react-bootstrap/Placeholder";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

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
      return Boolean(countryData?.length === countryList?.length);
    }

    const newArray = countryData?.filter(
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
              <motion.div
                key={`image-${index}`}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="flex flex-row items-center border-2 rounded p-2 bg-white shadow-sm mb-2 h-24 ">
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
              </motion.div>
            ))}
        </div>
      </div>
    );
  }

  if (countryData?.length === 0 && !isLoading) {
    return (
      <div className=" flex items-center justify-center  flex-col">
        <img
          src={"/images/no-data-found.png"}
          className="h-96 w-96 object-cover rounded"
          alt={`image-nodata`}
        />
        <h2 className="m-0 p-0">No data found</h2>
      </div>
    );
  }

  return (
    <div className="my-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {countryList?.map((item, index) => (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            key={`image-${index}`}
            className="flex flex-row items-center border-2 rounded p-2 bg-white shadow-sm mb-2 cursor-pointer"
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
          </motion.div>
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
