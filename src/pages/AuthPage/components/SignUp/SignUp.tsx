import { Box, Button } from "@mui/material";
import {
	Email as EmailIcon,
	AccountCircle as AccountCircleIcon,
	Lock as LockIcon,
} from "@mui/icons-material";
import { AuthForm } from "../AuthForm";
import { auth } from "@/services";
import { Header } from "../Header";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Footer } from "../Footer";

function SignUp() {
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
				<AuthForm
					id="email"
					label="Email"
					placeholder="john@mail.ru"
					icon={<EmailIcon />}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<AuthForm
					id="password"
					label="Password"
					placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
					icon={<LockIcon />}
					type="password"
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
					}}
				/>
			</Box>
		</>
	);
}

export { SignUp };
