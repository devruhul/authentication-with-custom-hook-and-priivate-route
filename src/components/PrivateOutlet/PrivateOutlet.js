import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateOutlet = () => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <Spinner animation="border" />
    }

    return user?.email ? <Outlet /> :
        <Navigate
            to="/login"
            state={{ from: location }}
            replace
        />;
};

export default PrivateOutlet;