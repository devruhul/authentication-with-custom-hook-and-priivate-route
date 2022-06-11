import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, userLogout } = useAuth()
    return (
        <div>
            <Link to="home">Home</Link>
            <Link to="shipping">Shipping</Link>
            <Link to="register">Register</Link>
            <Link to="login">Log In</Link>
            <span> {user.displayName} </span>
            {user?.email && <button onClick={userLogout}>Log Out</button>}
        </div>
    );
};

export default Header;