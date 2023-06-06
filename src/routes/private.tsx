import React from "react";
import { Navigate } from "react-router-dom";
import { ChatRoutes } from "@/features/chats";
import { ErrorPage, HomePage } from "@/pages";
import { PATHS } from "@/utils";

export const privateRoutes = [
	{
		path: PATHS.HOME,
		element: <HomePage />,
		errorElement: <ErrorPage />,
		children: ChatRoutes,
	},
	{
		path: "*",
		element: <Navigate replace to={PATHS.HOME} />,
	},
];
