import React, { useState } from "react";
import { AccountCircle as AccountCircleIcon } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services";
import { Footer } from "../Footer";
import { AuthForm } from "../Forms/AuthForm";
import { EmailForm } from "../Forms/EmailForm";
import { PasswordForm } from "../Forms/PasswordForm";
import { Header } from "../Header";

interface SignUpProps {
	switchTab: () => void;
}

function SignUp({ switchTab }: SignUpProps) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log("New user have been registered: ", user);
			})
			.catch((error) => {
				console.log(
					"Error occured during registration: ",
					error.message
				);
			});
	};

	return (
		<>
			<Header title="sign up" subtitle="register new account" />

			<Box
				component="form"
				sx={{
					display: "flex",
					flexDirection: "column",
				}}
				onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
					handleSubmit(e)
				}>
				<AuthForm
					id="username"
					label="Username"
					placeholder="John"
					icon={<AccountCircleIcon />}
				/>
				<EmailForm
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<PasswordForm
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button type="submit" variant="contained" sx={{ mt: 3 }}>
					Sign Up
				</Button>

				<Footer
					linkText="Sign in"
					helperText="Already have an account?"
					onLinkClick={() => {
						console.log(`You clicked on "Sign In" link`);
						switchTab();
					}}
				/>
			</Box>
		</>
	);
}

export { SignUp };
