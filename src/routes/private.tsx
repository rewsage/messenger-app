import React from "react";
import { Navigate } from "react-router-dom";
import { PATHS } from "@/utils";
import { Home } from "@/pages/Home";
import { Error } from "@/pages/Error";
import { ChatWindow } from "@/pages/Home/components";

export const privateRoutes = [
	{
		path: PATHS.HOME,
		element: <Home />,
		errorElement: <Error />,
		children: [
			{
				errorElement: <Error />,
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
