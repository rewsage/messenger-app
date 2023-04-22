import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { ContainerLayout } from "@/layouts";

function AuthPage(): JSX.Element {
	return (
		<ContainerLayout>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					minWidth: {
						xs: 1,
						sm: 3 / 4,
						md: 1 / 2,
						lg: 1 / 3,
					},
					bgcolor: "white",
					borderRadius: 2,
					p: 3,
				}}>
				<Outlet />
			</Box>
		</ContainerLayout>
	);
}

export { AuthPage };
