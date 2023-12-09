"use client";

import { store } from "@/lib/redux/store";
import React from "react";
import { Provider } from "react-redux";

type IStoreProviderProps = {
  children: React.ReactNode;
};

const StoreProvider: React.FC<IStoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default StoreProvider;
