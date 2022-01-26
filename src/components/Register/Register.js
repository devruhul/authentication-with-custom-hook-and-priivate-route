import React from 'react';
import { Link } from 'react-router-dom';
// import useDocumentTitle from '../../hooks/useDocumentTitle';
import Page from '../Page/Page';

const Register = () => {

    // useDocumentTitle('Register')

    return (
        <div>
            <Page title='Register' />

            <h2> Please Register</h2>
            <form >
                <label htmlFor="email">Email : </label>
                <input type="text" name="email" />
                <br />
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
                <br />
                <Link to="/login">Already Registerd?</Link>
            </form>
        </div>
    );
};

export default Register;