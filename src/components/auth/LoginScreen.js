import React from 'react';
import {useDispatch} from 'react-redux'

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {

    //Dispatches the login action
    const dispatch = useDispatch();

    //Initial state
    const [ formValues, handleInputChange ] = useForm({
        email: 'correo1@gmail.com',
        password: '123456',
    });

    //obj destructuring
    const {email,password} = formValues;

    // action Submit form
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword(email, password) ); //dispatch the action login from auth.js
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <div>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={handleLogin}>

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email} //value from destructuring
                    onChange={handleInputChange} //from initial state
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password} //value from destructuring
                    onChange={handleInputChange} //from initial state
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Login
                </button>

                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link"
                >
                        Create new account
                </Link>

            </form>

        </div>
    )
}
