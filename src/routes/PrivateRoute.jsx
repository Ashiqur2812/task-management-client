import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Loader from '../shared/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loader/>;
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace='true' />;
};

export default PrivateRoute;