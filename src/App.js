import "./App.css"
import Form from "./components/Form"
import Header from "./components/Header"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RequireToken } from "./components/Auth"
import LoginPage from "./components/LoginPage"
import ProfilePage from "./components/LoginPage"

function App() {
	const signUp = [
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
	const login = [
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
	]
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path='/' element={<Home />}></Route>
					<Route path='/login' element={<Form fieldValue={login} />} />
					<Route path='/signup' element={<Form fieldValue={signUp} />} />
					<Route
						path='/profile'
						element={
							<RequireToken>
								<ProfilePage />
							</RequireToken>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
