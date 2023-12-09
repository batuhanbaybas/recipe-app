import { categoryMiddleware } from "./slice/categoryApi";
import { foodMiddleware } from "./slice/foodApi";

const middleware = [categoryMiddleware, foodMiddleware];

export default middleware;
