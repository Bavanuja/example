import React from 'react'
import { useAuth } from '../context/authContext'
import Content from '../component/content'

export default function Home() {
    
    return (
    <div style={{ height: '80vh'}} >
    <Content />
    </div>
  )
}
