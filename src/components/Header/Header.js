import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, signout } = useFirebase()
    return (
        <div>
            <Link to="home" > Home</Link>
            <Link to="register" > Register</Link>
            <Link to="login" > Log In</Link>
            <span > {user.displayName} </span>
            {user?.email && <button onClick={signout}>Log Out</button>}
        </div>
    );
};

export default Header;