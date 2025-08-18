import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const AuthWrapper = (props) => {

    const user = useSelector((state) => state.userReducer.users);
    return user ? props.children : <Navigate to="/login" />
}

export default AuthWrapper