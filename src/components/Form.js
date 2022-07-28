import { useState } from "react"
import { useForm } from "react-hook-form"
import "../style/form.css"

const Form = ({ fieldValue }) => {
	const [data, setData] = useState("")
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm()

	console.log(errors ? errors : null)
	return (
		<div className='form-body'>
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
