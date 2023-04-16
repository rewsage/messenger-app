import React from "react";
import { Navigate } from "react-router-dom";
import { ChatWindow } from "@/features/chat";
import { ErrorPage, HomePage } from "@/pages";
import { PATHS } from "@/utils";

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
