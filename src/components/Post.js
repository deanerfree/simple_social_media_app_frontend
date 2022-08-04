import React from "react"
import Form from "./Form"
import { post } from "../helper/formHelper"
import "../style/post.css"
const Post = () => {
	return (
		<div>
			<div className='postBox'>
				<h2>CreatePost</h2>
				<Form fieldValue={post} endpoint={"post"} />
			</div>
		</div>
	)
}

export default Post
