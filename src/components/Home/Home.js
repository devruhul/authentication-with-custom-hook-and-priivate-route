import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import useAuth from './../../hooks/useAuth'

const Home = () => {

    useDocumentTitle('Home title 👻')

    const { user } = useAuth()

    return (
        <div>
            <h2>This is home</h2>
            <h1>user : {user.displayName}</h1>
            <img src={user.photoURL} alt="user-avatar" />
        </div>
    );
};

export default Home;