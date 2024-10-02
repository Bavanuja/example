import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export default function Login() {
    const { login } = useAuth();  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  
    const handleLogin = () => {
        
if (username === 'Banu' && password === '1234') {
    login(username); 
    navigate('/'); 
    }
else {
        alert('Invalid credentials');
      }
};

    
 return (
        <div style={{ width: '40%', marginLeft: 'auto', marginRight: 'auto' }}>
            <h4>Username:</h4>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '100%', border: '3px solid black', height: '30px', borderRadius: '5px' }}
            />

            <h4>Password:</h4>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', border: '3px solid black', height: '30px', borderRadius: '5px' }}
            />

            <button
                style={{
                     marginTop: '30px', 
                     width: '100%', 
                     border: '3px solid black', 
                     height: '30px', 
                     backgroundColor: 'blue',
                     color:'white',
                     borderRadius: '5px' }}
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
}
