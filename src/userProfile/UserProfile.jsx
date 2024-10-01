import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../provider/AuthProvider';

const UserProfile = () => {
    const {user} =useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h2>Name:{user.email}</h2>
            
            
        </div>
    );
};

export default UserProfile;