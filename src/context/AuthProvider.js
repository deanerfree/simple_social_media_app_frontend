import { createContext, useState, useEffect } from "react"

const AuthContext = createContext()

const AuthContextProvider = (props) => {
	const [auth, setAuth] = useState(false)
	const [data, setData] = useState([])
	const values = { data, auth }
	return (
		<AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
	)
}

export default AuthContextProvider
