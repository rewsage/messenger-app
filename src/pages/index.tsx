import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Main } from "./Main";
import { Error } from "./Error";
import { Chat } from "./Main/components/Chat";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <Error />,
		children: [
			{
				errorElement: <Error />,
				children: [
					{
						index: true,
						element: <Chat />,
					},
				],
			},
		],
	},
]);

export { router };
