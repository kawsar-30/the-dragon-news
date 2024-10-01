import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if(loading){
       return <div className="radial-progress" style={{ "--value": 70 }} role="progressbar">
  70%
</div>
    }    
    if(user){
        return children
    }

    return ( <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRoutes;