import React, { useState } from "react";
import { Email as EmailIcon } from "@mui/icons-material";
import { Lock as LockIcon } from "@mui/icons-material";
import { Box, Button, FormHelperText, Link } from "@mui/material";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { auth } from "@/services";
import { AUTH_ERROR_MESSAGES } from "@/utils";
import { AuthForm } from "../AuthForm";
import { Footer } from "../Footer";
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
	const [submissionError, setSubissionError] = useState("");

	const handleSubmit = async (
		{ email, password }: FormValues,
		setSubmiting: (isSubmitting: boolean) => void
	) => {
		try {
			const { user } = await signInWithEmailAndPassword(
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
				setSubissionError("Internal error occured on login.");
			}
		}

		setSubmiting(false);
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
						<FormHelperText error sx={{ mb: "4px" }}>
							{submissionError}
						</FormHelperText>
						<Button
							type="submit"
							variant="contained"
							disabled={isSubmitting}>
							Sign In
						</Button>
					</Box>
				)}
			</Formik>

			<Footer
				linkText="Sign up"
				helperText="Don't have an account?"
				onLinkClick={() => {
					switchTab();
				}}
			/>
		</>
	);
}

export { Login };
