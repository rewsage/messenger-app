import React, { useState } from "react";
import { Typography, Box, Button, Link } from "@mui/material";
import { Email as EmailIcon, Lock as LockIcon } from "@mui/icons-material";
import { AuthForm } from "../AuthForm";
import { auth } from "@/services";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Header } from "../Header";
import { Footer } from "../Footer";

function Login(): JSX.Element {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user);
			})
			.catch((error) => {
				console.log(error);
				console.log("invalid credentials");
			});
	};

	return (
		<>
			<Header title="login" subtitle="sign in to your account" />

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
					id="email"
					label="Email"
					icon={<EmailIcon />}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<AuthForm
					id="password"
					label="Password"
					icon={<LockIcon />}
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Link
					component="button"
					type="button"
					variant="body2"
					alignSelf="start"
					onClick={() => {
						console.log("You forgot password!");
					}}>
					Forgot password?
				</Link>
				<Button type="submit" variant="contained" sx={{ mt: 3 }}>
					Sign In
				</Button>
			</Box>

			<Footer
				linkText="Sign up"
				helperText="Don't have an account?"
				onLinkClick={() => {
					console.log(`You clicked on "Sign up" link`);
				}}
			/>
		</>
	);
}

export { Login };
