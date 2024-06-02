import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {
        const {user,loading} = useContext(AuthContext)
        const location = useLocation();
        if(loading){
                return <progress className="progress w-56" value={0} max="100"></progress>
        }
        if(user?.email){
                return children
        }
        return <Navigate state={location.pathname} to="/login" replace></Navigate>
};

export default Privateroute;