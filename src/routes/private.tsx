import React from "react";
import { Navigate } from "react-router-dom";
import { PATHS } from "@/utils";
import { HomePage } from "@/pages/HomePage";
import { ErrorPage } from "@/pages/ErrorPage";
import { ChatWindow } from "@/pages/HomePage/components";

export const privateRoutes = [
	{
		path: PATHS.HOME,
		element: <HomePage />,
		errorElement: <ErrorPage />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{
						index: true,
						element: <ChatWindow />,
					},
				],
			},
		],
	},
	{
		path: "*",
		element: <Navigate replace to={PATHS.HOME} />,
	},
];
