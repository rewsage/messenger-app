import React from "react";
import { useNavigate } from "react-router-dom";
import { FormHelperText } from "@mui/material";
import { sendPasswordResetEmail } from "firebase/auth";
import { Formik } from "formik";
import * as Yup from "yup";
import { useFormSubmission } from "@/features/authentication/hooks";
import { auth } from "@/services";
import { PATHS } from "@/utils";
import { EmailField } from "../Fields";
import { Footer } from "../Footer";
import { FormContainer } from "../FormContainer";
import { Header } from "../Header";
import { SubmitButton } from "../SubmitButton";

interface FormValues {
	email: string;
}

function PasswordReset(): JSX.Element {
	const initialValues: FormValues = { email: "" };
	const submission = useFormSubmission();
	const navigate = useNavigate();

	const handleSubmit = async (
		{ email }: FormValues,
		setSubmiting: (isSubmitting: boolean) => void
	) => {
		await submission.handler(() => sendPasswordResetEmail(auth, email));
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
					<FormContainer onSubmit={handleSubmit}>
						<EmailField />
						<FormHelperText error sx={{ mb: "4px" }}>
							{submission.error}
						</FormHelperText>
						<SubmitButton disabled={isSubmitting}>
							reset password
						</SubmitButton>
					</FormContainer>
				)}
			</Formik>

			<Footer
				linkText="Return to login"
				onLinkClick={() => navigate(PATHS.LOGIN)}
			/>
		</>
	);
}

export { PasswordReset };
