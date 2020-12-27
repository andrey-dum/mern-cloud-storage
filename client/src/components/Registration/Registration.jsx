import React, { useState } from 'react'
import { registration } from '../../actions/users';
import Input from '../UI/Input/Input'

export default function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeEmailHandler = (e) => {
        setEmail(e.target.value)
    }
    const changePasswordHandler = (e) => {
        setPassword(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        registration(email, password)
        
    }
    
    return (
        <div className="registration">
            <div className="row">
                <div className="col s6 offset-s3">
                    <h3>Регистрация</h3>
                    <form onSubmit={submitHandler}>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={changeEmailHandler}
                        />
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={changePasswordHandler}
                        />

                        <button 
                                className="btn waves-effect waves-light"
                            >
                                Регистрация
                         </button>
        
                          
                    </form>
                </div>
            </div>
        </div>
    )
}
