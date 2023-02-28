import { Login } from "./components";
import { SignUp } from "./components";
import React from "react";
import { Container, CssBaseline, Box } from "@mui/material";

function AuthPage() {
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
						<SignUp />
					</Box>
				</Box>
			</Container>
		</>
	);
}

export { AuthPage };
