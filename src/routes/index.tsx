import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Root } from "./root";
import { Error } from "./error";
import { Chat } from "./chat";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
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
