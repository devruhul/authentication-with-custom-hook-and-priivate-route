import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useDocumentTitle from '../../hooks/useDocumentTitle';


const LogIn = () => {
    const { handleGoogleSignIn } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const redirect_uri = location.state?.from || "/home"

    const handleGoogleLogin = () => {
        handleGoogleSignIn()
            .then(result => {
                navigate(redirect_uri)
            })
    }

    useDocumentTitle('Login')

    return (
        <div>
            <h2>This is login</h2>
            <button onClick={handleGoogleLogin}>Google sign in</button>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default LogIn;