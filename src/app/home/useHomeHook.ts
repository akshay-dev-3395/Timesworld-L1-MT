import { fetchAllCountryApi } from "@/store/slice/homeSlice";
import { useAppDispatch, useAppSelector } from "@/store/useStoreHook";
import React, { useCallback, useEffect, useMemo, useState } from "react";

const useHomeHook = () => {
  const dispatch = useAppDispatch();
  const { countryData } = useAppSelector((state) => state.homeReducer);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 10;

  const countryList = useMemo(() => {
    const displayedCountries = countryData.slice(
      0,
      currentIndex + itemsPerPage
    );

    return displayedCountries;
  }, [currentIndex, countryData]);

  console.log("countryData====", countryList);

  const onPressLoadMore = useCallback(() => {
    setCurrentIndex((prev) => prev + itemsPerPage);
  }, [currentIndex]);

  const fetchCountryFunction = async () => {
    setIsLoading(true);
    const payload = {
      fields: "name,region,flag",
    };
    const resultAction = await dispatch(fetchAllCountryApi(payload));
    if (fetchAllCountryApi.fulfilled.match(resultAction)) {
      console.log("RESULT==SUCCESS==");
      setIsLoading(false);
    } else {
      console.log("RESULT==ERROR==");
      setIsLoading(true);
    }
  };

  useEffect(() => {
    fetchCountryFunction();
  }, []);

  return [onPressLoadMore, isLoading, countryList];
};

export default useHomeHook;
