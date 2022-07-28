import { useState } from "react"

const Hamburger = ({ active, changeStatus }) => {
	return (
		<div
			className='hamburger'
			id={`hamburger-menu${active ? "-active" : ""}`}
			onClick={changeStatus}>
			<span className='line'></span>
			<span className='line'></span>
			<span className='line'></span>
		</div>
	)
}

export default Hamburger
