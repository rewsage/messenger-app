import React from "react";
import { PATHS } from "@/utils";
import { Login } from "@/pages/Login";
import { Error } from "@/pages/Error";
import { Navigate } from "react-router-dom";

export const publicRoutes = [
	{
		path: PATHS.LOGIN,
		element: <Login />,
		errorElement: <Error />,
	},
	{
		path: "*",
		element: <Navigate replace to={PATHS.LOGIN} />,
	},
];
