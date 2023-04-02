import React, { useState } from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { Login } from "./components";
import { SignUp } from "./components";

function AuthPage() {
	const [tabName, setTabName] = useState("LogIn");

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
						{tabName === "SignUp" ? (
							<SignUp switchTab={() => setTabName("LogIn")} />
						) : (
							<Login switchTab={() => setTabName("SignUp")} />
						)}
					</Box>
				</Box>
			</Container>
		</>
	);
}

export { AuthPage };
