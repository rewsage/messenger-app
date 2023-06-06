import { Schema, ValidationError } from "yup";

export async function validateField(
	validationSheme: Schema,
	...validateParams: Parameters<Schema["validate"]>
) {
	try {
		await validationSheme.validate(...validateParams);
	} catch (err) {
		if (err instanceof ValidationError) return err.message;
	}

	return;
}

export function delay(ms?: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}
