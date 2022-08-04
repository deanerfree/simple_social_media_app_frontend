import "./App.css"
import Form from "./components/Form"
import Header from "./components/Header"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RequireToken } from "./components/Auth"
import LoginForm from "./components/LoginForm"
import ProfilePage from "./components/ProfilePage"
import { signUp, login } from "./helper/formHelper"

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path='/' element={<Home />}></Route>
					<Route
						path='/login'
						element={<Form fieldValue={login} endpoint={"login"} />}
					/>
					<Route
						path='/signup'
						element={<Form fieldValue={signUp} endpoint={"signup"} />}
					/>
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
