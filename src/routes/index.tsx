import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAppSelector } from "@/app/hooks";
import { privateRoutes } from "./private";
import { publicRoutes } from "./public";

function AppRoutes() {
	const { uid } = useAppSelector((state) => state.user);
	const router = createBrowserRouter(uid ? privateRoutes : publicRoutes);

	return <RouterProvider router={router} />;
}

export { AppRoutes };
