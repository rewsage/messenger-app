import React from "react";
import { useNavigate } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
import { FormHelperText } from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Formik } from "formik";
import * as Yup from "yup";
import { useFormSubmission } from "@/features/authentication/hooks";
import { auth } from "@/services";
import { writeUserData } from "@/services/writeUserData";
import { PATHS } from "@/utils";
import { AuthField, EmailField, PasswordField } from "../Fields";
import { Footer } from "../Footer";
import { FormContainer } from "../FormContainer";
import { Header } from "../Header";
import { SubmitButton } from "../SubmitButton";

interface FormValues {
	username: string;
	email: string;
	password: string;
}

function SignUp(): JSX.Element {
	const initialValues: FormValues = { username: "", email: "", password: "" };
	const submission = useFormSubmission();
	const navigate = useNavigate();

	const handleSubmit = async (
		{ email, password, username }: FormValues,
		setSubmitting: (isSubmitting: boolean) => void
	) => {
		await submission.handler(async () => {
			const { user } = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			await writeUserData(user.uid, username, email);
		});

		setSubmitting(false);
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
				{({ handleSubmit, isSubmitting }) => (
					<FormContainer onSubmit={handleSubmit}>
						<AuthField
							name="username"
							label="Username"
							placeholder="John"
							icon={<AccountCircle />}
						/>
						<EmailField />
						<PasswordField />
						<FormHelperText error sx={{ mb: "4px" }}>
							{submission.error}
						</FormHelperText>
						<SubmitButton disabled={isSubmitting}>
							sign up
						</SubmitButton>
					</FormContainer>
				)}
			</Formik>

			<Footer
				linkText="Sign in"
				helperText="Already have an account?"
				onLinkClick={() => navigate(PATHS.LOGIN)}
			/>
		</>
	);
}

export { SignUp };
