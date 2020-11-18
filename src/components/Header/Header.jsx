import React from "react"
import { NavLink } from "react-router-dom"
import s from "./Header.module.css"
const Header = (props) => {
    return (
        <div className={s.header}>
            <NavLink to="/cities">
                WeatherApp
            </NavLink>
        </div>
    )
}
export default Header;