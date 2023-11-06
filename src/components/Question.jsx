import React, { useState } from 'react'
import './Question.css'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Question({ currQues,
    setCurrQues,
    questions,
    options,
    correct,
    setTotal,
    total,
    setQuestions,}) {
    const [selected,setSelected]=useState()
    const [error,setError]=useState(false)
    const navigate=useNavigate()
    const handleSelect=(item)=>{
        if(selected===item && selected===correct){
            return "select"
        }else if(selected===item && selected !== correct){
            return "wrong"
        }else{
            if(item===correct){
                return "select"
            }
        }

    }
    const handleCheck=(item)=>{
        setSelected(item)
        if(item=== correct) setTotal(total+1)
        setError(false)

    }
    const handleNext=()=>{
        if (currQues >8) {
            navigate("/result");
          } else if (selected) {
            setCurrQues(currQues + 1);
            setSelected();
          } else {
            toast.warning(`select an option`)
          }
        }
     const handleQuit = () => {
            setCurrQues(0);
            navigate('/result')
          };
  return (
    <div className='question'>
        
        <div className='singleQuestion'>
            <h4><span style={{fontSize:'30px'}} className='text-primary fw-bolder'>Q{currQues+1}:</span>{questions[currQues].question}</h4>
            <div className='options'>
            {error && {error}}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
             </div>
             <div className='d-flex justify-content-evenly m-3 p-3 controls'>
                <button onClick={handleQuit}  className='btn btn-warning'>Quit</button>
                <button onClick={handleNext} className='btn btn-info'>Next</button>
               
             </div>
            </div>
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
        theme="colored"/>
        </div>
   
  )
}

export default Question