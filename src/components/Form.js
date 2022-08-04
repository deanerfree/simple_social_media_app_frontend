import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { fetchRequestOptions } from "../helper/api"
import "../style/form.css"

const Form = ({ fieldValue, endpoint }) => {
	const [data, setData] = useState("")
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm()
	const navigate = useNavigate()
	console.log(errors ? errors : null)
	console.log(endpoint ? endpoint : null)
	// console.log(fieldValue ? fieldValue : null)

	return (
		<div>
			<form
				onSubmit={handleSubmit(async (data) => {
					if (endpoint === "login") {
						const formData = new FormData()
						formData.append("username", data.username)
						formData.append("password", data.password)
						data = formData
					}
					setData(data)
					const response = await fetchRequestOptions(data, endpoint)
					console.log(response)
					if (response.access_token) {
						navigate("/profile")
					}
				})}>
				<div
					className={
						endpoint === "login" || endpoint === "signup"
							? "form-body"
							: "postBox"
					}>
					{fieldValue.map((fieldItem, index) => {
						return (
							<div
								className={endpoint === "post" ? "form-items" : null}
								key={index}>
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
					<input className='submit-button' type='submit' />
				</div>
			</form>
		</div>
	)
}

export default Form
