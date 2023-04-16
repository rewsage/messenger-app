import React from "react";
import { Navigate } from "react-router-dom";
import { AuthRoutes } from "@/features/authentication";
import { AuthPage, ErrorPage } from "@/pages";
import { PATHS } from "@/utils";

export const publicRoutes = [
	{
		path: PATHS.AUTH,
		element: <AuthPage />,
		errorElement: <ErrorPage />,
		children: AuthRoutes,
	},
	{
		path: "*",
		element: <Navigate replace to={PATHS.AUTH} />,
	},
];
