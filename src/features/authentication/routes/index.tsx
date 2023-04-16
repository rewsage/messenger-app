import React from "react";
import { Navigate } from "react-router-dom";
import {
	Login,
	PasswordReset,
	SignUp,
} from "@/features/authentication/components";
import { PATHS } from "@/utils";

export const AuthRoutes = [
	{
		path: PATHS.LOGIN,
		element: <Login />,
	},
	{
		path: PATHS.SIGN_UP,
		element: <SignUp />,
	},
	{
		path: PATHS.PASSWORD_RESET,
		element: <PasswordReset />,
	},
	{
		index: true,
		element: <Navigate replace to={PATHS.LOGIN} />,
	},
];
