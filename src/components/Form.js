import { useState } from "react"
import { useForm } from "react-hook-form"

const Form = (props) => {
	const [data, setData] = useState("")
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm()

	const fieldValue = [
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
	console.log(errors ? errors : null)
	return (
		<div>
			<form
				onSubmit={handleSubmit(async (data) => {
					setData(data)
					const requestOptions = {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(data),
					}
					console.log(requestOptions.body)
					const response = await fetch(
						["http://localhost:8000/users"],
						requestOptions
					)
					const jsonData = await response.json()
					console.log(jsonData)
				})}>
				{fieldValue.map((fieldItem, index) => {
					return (
						<div key={index}>
							<input
								{...register(fieldItem.name, {
									required: fieldItem.required ? `${fieldItem.errors}` : null,
									pattern: fieldItem.pattern ? fieldItem.pattern : null,
								})}
								placeholder={fieldItem.placeholder}
								type={fieldItem.type}
							/>
							{errors?.[fieldItem.name] ? (
								<p>{errors?.[fieldItem.name]?.message}</p>
							) : null}
						</div>
					)
				})}
				<input type='submit' />
			</form>
		</div>
	)
}

export default Form
