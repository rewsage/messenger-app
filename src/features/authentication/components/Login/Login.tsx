import React from "react";
import { useNavigate } from "react-router-dom";
import { FormHelperText, Link } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import * as Yup from "yup";
import { auth } from "@/services";
import { PATHS } from "@/utils";
import { useFormSubmission } from "../../hooks";
import { EmailField, PasswordField } from "../Fields";
import { Footer } from "../Footer";
import { FormContainer } from "../FormContainer";
import { Header } from "../Header";
import { SubmitButton } from "../SubmitButton";

interface FormValues {
	email: string;
	password: string;
}

function Login(): JSX.Element {
	const initialValues: FormValues = { email: "", password: "" };
	const submission = useFormSubmission();
	const navigate = useNavigate();

	const handleSubmit = async (
		{ email, password }: FormValues,
		setSubmiting: (isSubmitting: boolean) => void
	) => {
		await submission.handler(() =>
			signInWithEmailAndPassword(auth, email, password)
		);
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
				{({ handleSubmit, isSubmitting }) => (
					<FormContainer onSubmit={handleSubmit}>
						<EmailField />
						<PasswordField />
						<Link
							component="button"
							type="button"
							variant="body2"
							alignSelf="start"
							onClick={() => {
								navigate(PATHS.PASSWORD_RESET);
							}}>
							Forgot password?
						</Link>
						<FormHelperText error sx={{ mb: "4px" }}>
							{submission.error}
						</FormHelperText>
						<SubmitButton disabled={isSubmitting}>
							sign in
						</SubmitButton>
					</FormContainer>
				)}
			</Formik>

			<Footer
				linkText="Sign up"
				helperText="Don't have an account?"
				onLinkClick={() => navigate(PATHS.SIGN_UP)}
			/>
		</>
	);
}

export { Login };
