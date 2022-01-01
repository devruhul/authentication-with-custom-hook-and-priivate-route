import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const LogIn = () => {
    const { handleGoogleSignIn } = useAuth()

    return (
        <div>
            <h2>This is login</h2>
            <button onClick={handleGoogleSignIn}>Google sign in</button>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default LogIn;