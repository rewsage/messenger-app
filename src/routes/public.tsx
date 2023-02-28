import React from "react";
import { PATHS } from "@/utils";
import { AuthPage } from "@/pages/AuthPage";
import { ErrorPage } from "@/pages/ErrorPage";
import { Navigate } from "react-router-dom";

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
