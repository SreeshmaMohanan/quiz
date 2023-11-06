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
    <div className=' bg-light w-50 m-5 p-5 border shadow rounded justify-content-center align-items-center'>
      <h3 className='text-warning fw-bolder'>Final Score:<span className='text-dark'> {total}/10</span></h3>
     
      <div><Link to='/' className='btn btn-primary mt-5'>Back to home</Link></div>
    </div>
    
  )
}

export default Result