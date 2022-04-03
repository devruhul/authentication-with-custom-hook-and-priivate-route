import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useDocumentTitle from '../../hooks/useDocumentTitle';
import Page from '../Page/Page';


const LogIn = () => {
    const { handleGoogleSignIn, user } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const redirect_uri = location.state?.from || "/home"

    const handleGoogleLogin = () => {
        handleGoogleSignIn()
            .then(result => {
                navigate(redirect_uri)
                const storageuserInfo = localStorage.setItem("user", JSON.stringify(result.user))

                console.log(storageuserInfo)
            })
    }

    // useDocumentTitle('Login')

    return (
        <div>
            <Page title='Login' />
            {user?.email ? <h2>Please Logout </h2> : <h2>Please Login</h2>}

            {
                user?.email ? [] : <button onClick={handleGoogleLogin}>Google sign in</button>

            }
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default LogIn;