import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'

export default function PRoutes({children}) {
    const { user } = useAuth() 
    if (!user){
       return <Navigate to="/Login"  />
    }
   return children;
    
  
}
