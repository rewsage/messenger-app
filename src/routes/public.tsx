import React from "react";
import { Navigate } from "react-router-dom";
import { AuthPage, ErrorPage } from "@/pages";
import { PATHS } from "@/utils";

export const publicRoutes = [
	{
		path: PATHS.LOGIN,
		element: <AuthPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "*",
		element: <Navigate replace to={PATHS.LOGIN} />,
	},
];
