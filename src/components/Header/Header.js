import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, signout } = useAuth()
    return (
        <div>
            <Link to="home" > Home</Link>
            <Link to="shipping" > Shipping</Link>
            <Link to="register" > Register</Link>
            <Link to="login" > Log In</Link>
            <span > {user.displayName} </span>
            {user?.email && <button onClick={signout}>Log Out</button>}
        </div>
    );
};

export default Header;