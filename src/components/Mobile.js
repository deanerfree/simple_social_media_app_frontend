import React, { useState, useEffect } from "react"
import Hamburger from "./Hamburger"
import { Link, useLocation } from "react-router-dom"

const Mobile = () => {
	const [active, setActive] = useState(false)
	const location = useLocation()
	const linkStyle = {
		textDecoration: "none",
		color: "black",
		width: "100%",
		height: "100%",
	}
	useEffect(() => {}, [])

	const changeStatus = () => {
		setActive((prev) => !prev)
	}
	const closeWindow = () => {
		setActive(false)
	}
	return (
		<div className='header'>
			<div>
				<Hamburger active={active} changeStatus={() => changeStatus()} />
			</div>

			<div className='menu-list'>
				{active ? (
					<ul>
						<li>
							<Link
								exact='true'
								to='/'
								style={linkStyle}
								onClick={() => closeWindow()}>
								Home
							</Link>
						</li>
						<li>
							<Link to='/login' style={linkStyle} onClick={() => closeWindow()}>
								Login
							</Link>
						</li>
						<li>
							<Link
								to='/signup'
								style={linkStyle}
								onClick={() => closeWindow()}>
								Signup
							</Link>
						</li>
					</ul>
				) : null}
			</div>
		</div>
	)
}

export default Mobile
