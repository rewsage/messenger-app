import { useState } from "react";
import { FirebaseError } from "firebase/app";
import { UserCredential } from "firebase/auth";
import { AUTH_ERROR_MESSAGES } from "../utils";

type SubmissionHandler<T> = (authFunc: () => Promise<T>) => Promise<T>;

function useFormSubmission() {
	const [error, setError] = useState<string | null>(null);

	const handleSubmit: SubmissionHandler<UserCredential | void> = async (
		authFunc
	) => {
		try {
			setError(null);
			return await authFunc();
		} catch (err) {
			if (
				err instanceof FirebaseError &&
				err.code in AUTH_ERROR_MESSAGES
			) {
				setError(AUTH_ERROR_MESSAGES[err.code]);
			} else {
				setError("Internal error occured during submission.");
			}
		}
	};

	return { error, handler: handleSubmit };
}

export { useFormSubmission };
