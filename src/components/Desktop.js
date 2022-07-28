import React from "react"
import { Link } from "react-router-dom"

const Desktop = () => {
	return (
		<div className='header'>
			<div className='menu-list'>
				<ul>
					<li>
						<Link
							exact
							to='/'
							style={{ textDecoration: "none", color: "black" }}>
							Home
						</Link>
					</li>
					<li>
						<Link to='/login' style={{ textDecoration: "none" }}>
							Login
						</Link>
					</li>
					<li>
						<Link to='/signup' style={{ textDecoration: "none" }}>
							Signup
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Desktop
