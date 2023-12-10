import {
  categoryApiReducer,
  categoryApiReducerName
} from "./slice/categoryApi";
import { foodApiReducer, foodApiReducerName } from "./slice/foodApi";

export const rootReducer = {
  [categoryApiReducerName]: categoryApiReducer,
  [foodApiReducerName]: foodApiReducer
};
