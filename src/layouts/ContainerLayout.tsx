import React from "react";
import { Box, Container, CssBaseline } from "@mui/material";

interface ContainerLayoutProps {
	children?: JSX.Element;
}

function ContainerLayout({ children }: ContainerLayoutProps) {
	return (
		<>
			<CssBaseline />
			<Container>
				<Box
					sx={{
						display: "flex",
						height: "100vh",
						justifyContent: "center",
						alignItems: "center",
					}}>
					{children}
				</Box>
			</Container>
		</>
	);
}

export { ContainerLayout };
