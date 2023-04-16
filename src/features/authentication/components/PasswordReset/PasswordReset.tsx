import React, { useState } from "react";
import { Email as EmailIcon } from "@mui/icons-material";
import { Box, Button, FormHelperText } from "@mui/material";
import { FirebaseError } from "firebase/app";
import { sendPasswordResetEmail } from "firebase/auth";
import { Formik } from "formik";
import * as Yup from "yup";
import {
	AUTH_ERROR_MESSAGES,
	AuthTabNames,
} from "@/features/authentication/utils";
import { auth } from "@/services";
import { AuthField } from "../AuthField";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface PasswordProps {
	switchTab: (name: AuthTabNames) => void;
}

interface FormValues {
	email: string;
}

function PasswordReset({ switchTab }: PasswordProps): JSX.Element {
	const initialValues: FormValues = { email: "" };
	const [submissionError, setSubissionError] = useState("");

	const handleSubmit = async (
		{ email }: FormValues,
		setSubmiting: (isSubmitting: boolean) => void
	) => {
		try {
			await sendPasswordResetEmail(auth, email);
			console.log("Reset message was sent.");
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
			<Header
				title="password reset"
				subtitle="enter your email address"
			/>

			<Formik
				initialValues={initialValues}
				validationSchema={Yup.object({
					email: Yup.string()
						.email("Invalid email address")
						.required("Required"),
				})}
				onSubmit={(values, { setSubmitting }) =>
					handleSubmit(values, setSubmitting)
				}>
				{({ handleSubmit, isSubmitting }) => (
					<Box
						component="form"
						sx={{
							display: "flex",
							flexDirection: "column",
						}}
						onSubmit={handleSubmit}>
						<AuthField
							name="email"
							label="Email"
							placeholder="john@gmail.com"
							icon={<EmailIcon />}
						/>
						<FormHelperText error sx={{ mb: "4px" }}>
							{submissionError}
						</FormHelperText>
						<Button
							type="submit"
							variant="contained"
							disabled={isSubmitting}>
							Reset password
						</Button>
					</Box>
				)}
			</Formik>

			<Footer
				linkText="Return to login"
				onLinkClick={() => switchTab(AuthTabNames.Login)}
			/>
		</>
	);
}

export { PasswordReset };
