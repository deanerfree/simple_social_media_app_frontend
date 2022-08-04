export const signUp = [
	{
		type: "text",
		name: "email",
		label: "Email",
		placeholder: "Enter Email",
		errors: "Email is required",
		required: true,
		pattern: {
			value: /\S+@\S+\.\S+/,
			message: "Entered value does not match email format",
		},
	},
	{
		type: "password",
		name: "password",
		label: "Password",
		placeholder: "Enter Password",
	},
	{
		type: "password",
		name: "confirm_password",
		label: "Password Confirmation",
		placeholder: "Re-Enter Password",
		required: true,
		errors: "Passwords do not match",
	},
]
export const login = [
	{
		type: "text",
		name: "username",
		label: "Email",
		placeholder: "Enter Email",
		errors: "Email is required",
		required: true,
		pattern: {
			value: /\S+@\S+\.\S+/,
			message: "Entered value does not match email format",
		},
	},
	{
		type: "password",
		name: "password",
		label: "Password",
		placeholder: "Enter Password",
	},
]

export const post = [
	{
		type: "post",
		name: "post",
		label: "Post",
		placeholder: "Create Post",
	},
]
