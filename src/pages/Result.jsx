import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Result({name,total}) {
  const navigate=useNavigate()
  useEffect(()=>{
    if(!name){
      navigate('/')

    }
  },[name,navigate])
  return (
    <div>
      <h3>Final Score: {total}/20</h3>
      <div><Link to='/'>Back to home</Link></div>
    </div>
    
  )
}

export default Result