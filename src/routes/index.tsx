import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAppSelector } from "@/app/hooks";
import { privateRoutes } from "./private";
import { publicRoutes } from "./public";

function AppRoutes() {
	const userData = useAppSelector((state) => state.user.data);
	const router = createBrowserRouter(userData ? privateRoutes : publicRoutes);

	return <RouterProvider router={router} />;
}

export { AppRoutes };
