import React, { useState } from "react";
import { AccountCircle as AccountCircleIcon } from "@mui/icons-material";
import { Email as EmailIcon } from "@mui/icons-material";
import { Lock as LockIcon } from "@mui/icons-material";
import { Box, Button, FormHelperText } from "@mui/material";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { auth } from "@/services";
import { AUTH_ERROR_MESSAGES } from "@/utils";
import { AuthForm } from "../AuthForm";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface SignUpProps {
	switchTab: () => void;
}

interface FormValues {
	username: string;
	email: string;
	password: string;
}

function SignUp({ switchTab }: SignUpProps): JSX.Element {
	const initialValues: FormValues = { username: "", email: "", password: "" };
	const [submissionError, setSubissionError] = useState("");

	const handleSubmit = async (
		{ email, password }: FormValues,
		setSubmiting: (isSubmitting: boolean) => void
	) => {
		try {
			const { user } = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			console.log("User logged in: ", user);
		} catch (err) {
			if (
				err instanceof FirebaseError &&
				err.code in AUTH_ERROR_MESSAGES
			) {
				setSubissionError(AUTH_ERROR_MESSAGES[err.code]);
			} else {
				setSubissionError(
					"Internal error occured during registration."
				);
			}
		}

		setSubmiting(false);
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
				onSubmit={(values, { setSubmitting }) =>
					handleSubmit(values, setSubmitting)
				}>
				{({ errors, touched, handleSubmit, isSubmitting }) => (
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
						<FormHelperText error sx={{ mb: "4px" }}>
							{submissionError}
						</FormHelperText>
						<Button
							type="submit"
							variant="contained"
							disabled={isSubmitting}>
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
