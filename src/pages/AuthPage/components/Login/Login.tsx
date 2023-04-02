import React, { useState } from "react";
import { Box, Button, Link } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services";
import { Footer } from "../Footer";
import { EmailForm } from "../Forms/EmailForm";
import { PasswordForm } from "../Forms/PasswordForm";
import { Header } from "../Header";

interface LoginProps {
	switchTab: () => void;
}

function Login({ switchTab }: LoginProps): JSX.Element {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log("User logged in: ", user);
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
				<EmailForm
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<PasswordForm
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
					switchTab();
				}}
			/>
		</>
	);
}

export { Login };
