import {
	Login,
	PasswordReset,
	SignUp,
} from "@/features/authentication/components";

export enum AuthTabNames {
	Login,
	SignUp,
	PasswordReset,
}

export const AuthTabs = {
	[AuthTabNames.Login]: Login,
	[AuthTabNames.SignUp]: SignUp,
	[AuthTabNames.PasswordReset]: PasswordReset,
};

interface AuthErrorMessages {
	readonly [key: string]: string;
}

export const AUTH_ERROR_MESSAGES: AuthErrorMessages = {
	"auth/wrong-password": "The password is invalid.",
	"auth/email-already-exists":
		"The provided email is already in use by an existing user.",
	"auth/invalid-password":
		"The password is invalid. It must be a string with at least six characters.",
	"auth/phone-number-already-exists":
		"The provided phoneNumber is already in use by an existing user.",
	"auth/admin-restricted-operation":
		"This operation is restricted to administrators only.",
	"auth/cors-unsupported": "This browser is not supported.",
	"auth/credential-already-in-use":
		"This credential is already associated with a different user account.",
	"auth/email-change-needs-verification":
		"Multi-factor users must always have a verified email.",
	"auth/email-already-in-use":
		"The email address is already in use by another account.",
	"auth/internal-error": "An internal error has occurred. Please, contact us",
	"auth/invalid-email": "The email address is badly formatted.",
	"auth/invalid-credential":
		"The supplied auth credential is malformed or has expired.",
	"auth/invalid-phone-number":
		"The format of the phone number provided is incorrect.",
	"auth/multi-factor-auth-required":
		"Proof of ownership of a second factor is required to complete sign-in.",
	"auth/account-exists-with-different-credential":
		"Sign in using a provider associated with this email address.",
	"auth/network-request-failed": "A network request has failed.",
	"auth/timeout": "The operation has timed out.",
	"auth/user-token-expired":
		"The credential is no longer valid. Try to sign in again.",
	"auth/too-many-requests":
		"We have blocked all requests from this device due to unusual activity. Try again later.",
	"auth/unverified-email": "The operation requires a verified email.",
	"auth/user-disabled": "The account has been disabled by an administrator.",
	"auth/user-mismatch":
		"The supplied credentials do not correspond to the previously signed in user.",
	"auth/weak-password": "The password must be 6 characters long or more.",
	"auth/user-not-found": "The user doesn't exist.",
};
