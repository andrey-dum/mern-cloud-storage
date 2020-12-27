import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.scss'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Cloud Storage</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to={'/login'}>Войти</NavLink></li>
                    <li><NavLink to={'/registration'}>Регистрация</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
