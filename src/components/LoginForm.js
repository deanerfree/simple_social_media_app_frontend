import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { fetchRequestOptionsLogin } from "../helper/api"
import "../style/form.css"

const LoginForm = ({ endpoint }) => {
	const [data, setData] = useState()
	const navigate = useNavigate()
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm()
	console.log(errors ? errors : null)

	return (
		<div className='form-body'>
			<h2>The login form</h2>
			<form
				onSubmit={handleSubmit(async (data, endpoint) => {
					const formData = new FormData()
					formData.append("username", data.username)
					formData.append("password", data.password)

					const response = await fetchRequestOptionsLogin(formData, endpoint)
					console.log(response)
					if (response.access_token) {
						navigate("/profile")
					}
				})}>
				<div>
					<input
						{...register("username", {
							required: true,
							pattern: {
								value: /\S+@\S+\.\S+/,
								message: "Entered value does not match email format",
							},
						})}
						placeholder='Email'
						type='string'
					/>
					{errors ? <p>{errors.email?.message}</p> : null}
					<input
						{...register("password", {
							required: true,
						})}
						placeholder='Password'
						type='string'
					/>
					{errors ? <p>{errors.password?.message}</p> : null}
				</div>
				<input type='submit' />
			</form>
		</div>
	)
}

export default LoginForm
