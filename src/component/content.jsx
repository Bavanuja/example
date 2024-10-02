import React from 'react'
import { useAuth } from '../context/authContext'

export default function Content() {
 return (
  <div 
  style={{
    alignItems:'center',
     textAlign: 'center',
     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
     marginTop:'30px'
     }}>
      <img
        src="/p0.jpg"
        alt="profile"
      />
      <h2>John Doe</h2>
      <p>Frontend Developer | React Enthusiast</p>
      <div>
        <p><strong>Location:</strong> San Francisco, CA</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
      </div>
    </div>
  );
};
  

