import React, { useState, useEffect } from "react"
import Hamburger from "./Hamburger"
import { Link, useLocation } from "react-router-dom"

const Mobile = () => {
	const [active, setActive] = useState(false)
	const location = useLocation()
	const linkStyle = {
		textDecoration: "none",
		// color: "black",
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "",
	}
	useEffect(() => {}, [])

	const changeStatus = () => {
		setActive((prev) => !prev)
	}
	const closeWindow = () => {
		setActive(false)
	}
	return (
		<div className={`${active ? "header-active" : "header"}`}>
			<div className='headertop'>
				<Hamburger active={active} changeStatus={() => changeStatus()} />
			</div>

			<div className='menu-list'>
				{active ? (
					<ul>
						<li className='menu-item'>
							<Link
								exact='true'
								to='/'
								style={linkStyle}
								onClick={() => closeWindow()}>
								Home
							</Link>
						</li>
						<li className='menu-item'>
							<Link to='/login' style={linkStyle} onClick={() => closeWindow()}>
								Login
							</Link>
						</li>
						<li className='menu-item'>
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
