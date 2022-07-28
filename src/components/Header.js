import React, { useEffect, useState } from "react"
import "../style/header.css"
import Desktop from "./Desktop"
import Mobile from "./Mobile"

const Header = () => {
	const mediaQuery = "screen and (min-width: 786px)"
	const mql = window.matchMedia(mediaQuery)
	const [showDesktopMenu, setShowDesktopMenu] = useState(mql.matches)
	console.log(mql)
	useEffect(() => {
		const handleMediaChange = () => {
			setShowDesktopMenu(mql.matches)
		}
		mql.addEventListener("change", handleMediaChange)
		setShowDesktopMenu(mql.matches)

		return () => {
			mql.removeEventListener("change", handleMediaChange)
		}
	}, [mql])

	if (showDesktopMenu) {
		return <Desktop />
	}
	return <Mobile />
}

export default Header
