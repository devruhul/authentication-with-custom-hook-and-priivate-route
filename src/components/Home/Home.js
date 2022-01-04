import React from 'react';
import useAuth from './../../hooks/useAuth'

const Home = () => {
    const { user } = useAuth()
    return (
        <div>
            <h2>This is home</h2>
            <h1>user : {user.displayName}</h1>
            <img src={user.photoURL} alt="" />
        </div>
    );
};

export default Home;