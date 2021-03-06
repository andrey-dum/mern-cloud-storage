import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { NavLink, Link } from 'react-router-dom'
import { logout } from '../../reducers/userReducer';
import {getFiles, searchFiles} from "../../actions/file";
import {showLoader} from "../../reducers/appReducer";
import './Navbar.scss'
import { API_URL } from '../../config';



export default function Navbar() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    const currentDir = useSelector(state => state.files.currentDir)
    const currentUser = useSelector(state => state.user.currentUser)

    const [searchName, setSearchName] = useState('')
    const [searchTimeout, setSearchTimeout] = useState(false)

    const avatar = currentUser.avatar ? <img className="navbar__avatar" src={`${API_URL + currentUser.avatar}`} alt=""/>  : <i class="material-icons navbar__avatar left">mood</i>

    const logoutHandler = () => {
        dispatch(logout())
    }

    function searchChangeHandler(e) {
        setSearchName(e.target.value)
        if (searchTimeout != false) {
            clearTimeout(searchTimeout)
        }
        dispatch(showLoader())
        if(e.target.value != '') {
            setSearchTimeout(setTimeout((value) => {
                dispatch(searchFiles(value));
            }, 500, e.target.value))
        } else {
            dispatch(getFiles(currentDir))
        }
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
                        <>
                        <li className="navbar__search-li"><input
                            value={searchName}
                            onChange={e => searchChangeHandler(e)}
                            className='navbar__search'
                            type="text"
                            placeholder="Название файла..."/>
                        </li> 
                        
                        <li className="logout" onClick={logoutHandler}>Выход</li>
                        <li>
                            <NavLink className="navbar__profileLink" to='/profile'>
                                {avatar}
                            </NavLink>
                        </li>
                        </>
                    ) }
                    
                </ul>
            </div>
        </nav>
    )
}
