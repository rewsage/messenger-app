import { createBrowserRouter } from "react-router-dom";
import { privateRoutes } from "./private";
import { publicRoutes } from "./public";

const user = false;
export const router = createBrowserRouter(user ? privateRoutes : publicRoutes);
