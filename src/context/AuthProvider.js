import { useContext, createContext, useState } from "react"
import { fakeAuthProvider } from "../helper/auth"

const AuthProvider = ({ children }) => {
	let AuthContext = createContext()

	function AuthProvider({ children }) {
		let [user, setUser] = useState()

		let signin = (newUser, callback) => {
			return fakeAuthProvider.signin(() => {
				setUser(newUser)
				callback()
			})
		}

		let signout = (callback) => {
			return fakeAuthProvider.signout(() => {
				setUser(null)
				callback()
			})
		}

		let value = { user, signin, signout }

		return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	}

	function useAuth() {
		return useContext(AuthContext)
	}
	return <AuthContext value={value}>{children}</AuthContext>
}

export default AuthProvider
