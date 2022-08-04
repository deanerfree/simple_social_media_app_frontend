import React from "react"
import { fetchToken } from "./Auth"
import Post from "./Post"
const ProfilePage = () => {
	return (
		<div className='home'>
			<h2>ProfilePage</h2>
			<br />
			<Post />
		</div>
	)
}

export default ProfilePage
