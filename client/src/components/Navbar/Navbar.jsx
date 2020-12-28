import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { NavLink, Link } from 'react-router-dom'
import { logout } from '../../reducers/userReducer';
import './Navbar.scss'

export default function Navbar() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Cloud Storage</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    { !isAuth ? (
                        <>
                            <li><NavLink to={'/login'}>Войти</NavLink></li>
                            <li><NavLink to={'/registration'}>Регистрация</NavLink></li>
                        </>
                    ) : (
                        <li className="logout" onClick={logoutHandler}>Выход</li>
                    ) }
                    
                </ul>
            </div>
        </nav>
    )
}
