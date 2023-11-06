import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Timer({duration}) {
    const navigate=useNavigate()
    const [time,setTime]=useState(duration)
    
    useEffect(()=>{
        setTimeout(() => {
            setTime(time-1000)
        }, 1000);
    },[time])
    const getFormat=(milliseconds)=>{
        let total_seconds=parseInt(Math.floor(milliseconds/1000))
        let total_minutes=parseInt(Math.floor(total_seconds/60))
        let seconds =parseInt(total_seconds%60)
        let minutes =parseInt(total_minutes%60)
       if(time==0){
        navigate('/result')
       }
        return `${minutes}:${seconds}`
    }

  return (
    <div className=' fw-bolder bg-dark text-light  p-1  rounded shadow'>
        Time: {getFormat(time)}
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/></div>
  )
}

export default Timer