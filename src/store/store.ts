import { configureStore, combineReducers } from "@reduxjs/toolkit";
import homeSlice from "./slice/homeSlice";

const appReducer = combineReducers({
  homeReducer: homeSlice,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export const store: any = configureStore({
  reducer: rootReducer,
});

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
