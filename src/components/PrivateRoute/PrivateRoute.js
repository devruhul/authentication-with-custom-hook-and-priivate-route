import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { user } = useAuth()

    return (
        <Route
            {...rest}
            render={() => user.email ? children:
                <Navigate
                    to="/login"
                >
                </Navigate>
            }
        >
        </Route>
    );
};

export default PrivateRoute;