import React,{useState} from 'react'
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate=useNavigate();
  const {user,Logout}= useAuth();
  function handleLogin(){
    navigate('/Login')
  }
  function handleLogout(){
    Logout();
    navigate('/Login')
  }
  
 return (
  <>
    <div 
    style={{ 
      height: '20px', 
      display:'flex',
      fontFamily:'roboto', 
      fontSize:'48px',
      color:'blue'
      
      
      }}>
     Linkdn
    </div>
    <div 
      style={{ 
        height: '50px', 
        display:'flex', 
        justifyContent:'end',
        }}>
    {user ? 
    <button onClick={() => navigate('/login')} 
    style={{
      borderRadius:'5px',
      backgroundColor: '#3498db',
      fontFamily:'roboto',
      color: 'white',
      border: 'none',
      padding:' 15px 32px' 
      }}>
        Logout
      </button>
    :<button onClick={handleLogin}>Login</button>} 
    
    </div>
    </>
    
  );
}
