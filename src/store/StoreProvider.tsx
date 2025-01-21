"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

type Props = {
  children: React.ReactNode;
};

const StoreProvider = (props: Props) => {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
