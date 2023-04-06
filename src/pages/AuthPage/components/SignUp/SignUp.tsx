import React from "react";
import { AccountCircle as AccountCircleIcon } from "@mui/icons-material";
import { Email as EmailIcon } from "@mui/icons-material";
import { Lock as LockIcon } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { auth } from "@/services";
import { Footer } from "../Footer";
import { AuthForm } from "../Forms/AuthForm";
import { Header } from "../Header";

interface SignUpProps {
	switchTab: () => void;
}

interface FormValues {
	username: string;
	email: string;
	password: string;
}

function SignUp({ switchTab }: SignUpProps) {
	const initialValues: FormValues = { username: "", email: "", password: "" };

	const handleSubmit = ({ email, password }: FormValues) => {
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

			<Formik
				initialValues={initialValues}
				validationSchema={Yup.object({
					username: Yup.string().max(
						18,
						"Must be 18 characters or less"
					),
					email: Yup.string()
						.email("Invalid email address")
						.required("Required"),
					password: Yup.string()
						.min(6, "Must be 6 characters or more")
						.required("Required"),
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
							name="username"
							as={AuthForm}
							label="Username"
							placeholder="John"
							icon={<AccountCircleIcon />}
							error={touched.username && Boolean(errors.username)}
							helperText={touched.username && errors.username}
						/>
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
						<Button type="submit" variant="contained">
							Sign Up
						</Button>
					</Box>
				)}
			</Formik>

			<Footer
				linkText="Sign in"
				helperText="Already have an account?"
				onLinkClick={() => {
					switchTab();
				}}
			/>
		</>
	);
}

export { SignUp };
