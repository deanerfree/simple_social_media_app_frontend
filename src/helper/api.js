import { setToken } from "../components/Auth"

export const fetchRequestOptionsLogin = async (data, endpoint) => {
	try {
		const requestOptions = {
			method: "POST",
			body: data,
		}
		const response = await fetch([`${endpoint}`], requestOptions)
		const jsonData = response.json()
		setToken(jsonData.access_token)

		return jsonData
	} catch (error) {
		console.error("error: ", error)
	}
}

export const fetchRequestOptionsSignup = async (data, endpoint) => {
	try {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		}
		console.log(requestOptions.body)
		const response = await fetch([`${endpoint}`], requestOptions)
		const jsonData = await response.json()
		setToken(jsonData.access_token)
		return jsonData
	} catch (error) {
		console.error(error.message)
	}
}

export const fetchRequestOptions = async (data, endpoint) => {
	console.log(data, endpoint)
	try {
		const requestOptions =
			endpoint === "signup"
				? {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(data),
				  }
				: {
						method: "POST",
						body: data,
				  }
		console.log(requestOptions.body)
		const response = await fetch([`${endpoint}`], requestOptions)
		const jsonData = await response.json()
		setToken(jsonData.access_token)
		return jsonData
	} catch (error) {}
}
