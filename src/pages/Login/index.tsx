import React from "react";
import {
	Container,
	CssBaseline,
	Typography,
	Box,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Button,
	Link,
} from "@mui/material";
import {
	AccountCircle as AccountCircleIcon,
	Lock as LockIcon,
} from "@mui/icons-material";
import { AuthForm } from "./components/AuthForm";
import { auth } from "@/services";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login(): JSX.Element {
	const email = "pashaa@mail.ru";
	const password = "qwerty";

	const handleSubmit = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				console.log(userCredential.user);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode);
				console.log(errorMessage);
			});
	};

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
						<Typography variant="h4">LOGIN</Typography>
						<Typography
							variant="body2"
							mb={3}
							color="text.secondary">
							SIGN IN TO YOUR ACCOUNT
						</Typography>
						<AuthForm margin="dense" size="small">
							<InputLabel
								htmlFor="username-input"
								variant="standard"
								sx={{
									fontSize: 18,
									fontWeight: 500,
								}}>
								Username
							</InputLabel>
							<OutlinedInput
								id="username-input"
								startAdornment={
									<InputAdornment position="start">
										<AccountCircleIcon fontSize="small" />
									</InputAdornment>
								}
								sx={{ mt: 3 }}
							/>
						</AuthForm>
						<AuthForm margin="dense" size="small">
							<InputLabel
								htmlFor="password-input"
								variant="standard"
								sx={{
									fontSize: 18,
									fontWeight: 500,
								}}>
								Password
							</InputLabel>
							<OutlinedInput
								id="password-input"
								type="password"
								startAdornment={
									<InputAdornment position="start">
										<LockIcon fontSize="small" />
									</InputAdornment>
								}
								sx={{ mt: 3 }}
							/>
						</AuthForm>
						<Link
							component="button"
							variant="body2"
							alignSelf="start"
							onClick={() => {
								console.info("I'm a button.");
							}}>
							Forgot password?
						</Link>
						<Button
							variant="contained"
							sx={{ mt: 3 }}
							onClick={handleSubmit}>
							Continue
						</Button>
						<Box display="flex" justifyContent="center" mt={2}>
							<Typography variant="body2" color="text.secondary">
								{`Don't have an account?`}&nbsp;
							</Typography>
							<Link
								component="button"
								variant="body2"
								onClick={() => {
									console.info("I'm a button.");
								}}>
								Sign up
							</Link>
						</Box>
					</Box>
				</Box>
			</Container>
		</>
	);
}

export { Login };
