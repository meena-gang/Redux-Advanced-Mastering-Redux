import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { authContext } from './context/AuthContext';


const PrivateRoute = ({children}) => {
    const{auth} = useContext(authContext);
    console.log(auth,'auth');
  return (
    <div>
        {auth ? children : <Navigate to='/login'/> }
    </div>
  )
}

export default PrivateRoute