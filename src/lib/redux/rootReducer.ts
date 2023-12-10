import {
  categoryApiReducer,
  categoryApiReducerName
} from "./slice/categoryApi";
import { foodApiReducer, foodApiReducerName } from "./slice/foodApi";
import { foodReducer, foodReducerName } from "./slice/foodSlice";

export const rootReducer = {
  [categoryApiReducerName]: categoryApiReducer,
  [foodApiReducerName]: foodApiReducer
};
