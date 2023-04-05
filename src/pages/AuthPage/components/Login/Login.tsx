import React from "react";
import { Email as EmailIcon } from "@mui/icons-material";
import { Lock as LockIcon } from "@mui/icons-material";
import { Box, Button, Link } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { auth } from "@/services";
import { Footer } from "../Footer";
import { AuthForm } from "../Forms/AuthForm";
import { Header } from "../Header";

interface LoginProps {
	switchTab: () => void;
}

interface FormValues {
	email: string;
	password: string;
}

function Login({ switchTab }: LoginProps): JSX.Element {
	const initialValues: FormValues = { email: "", password: "" };

	const handleSubmit = ({ email, password }: FormValues) => {
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

			<Formik
				initialValues={initialValues}
				validationSchema={Yup.object({
					email: Yup.string()
						.email("Invalid email address")
						.required("Required"),
					password: Yup.string().required("Required"),
				})}
				onSubmit={(values) => handleSubmit(values)}>
				{({ errors, touched, handleSubmit }) => (
					<Box
						component="form"
						sx={{
							display: "flex",
							flexDirection: "column",
						}}
						onSubmit={handleSubmit}>
						<Field
							name="email"
							as={AuthForm}
							label="Email"
							placeholder="john@gmail.com"
							icon={<EmailIcon />}
							error={touched.email && Boolean(errors.email)}
							helperText={touched.email && errors.email}
						/>
						<Field
							name="password"
							as={AuthForm}
							label="Password"
							type="password"
							placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
							icon={<LockIcon />}
							error={touched.password && Boolean(errors.password)}
							helperText={touched.password && errors.password}
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
						<Button
							type="submit"
							variant="contained"
							sx={{ mt: 3 }}>
							Sign In
						</Button>
					</Box>
				)}
			</Formik>

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
