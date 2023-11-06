import React, { useState } from 'react'
import './Question.css'
import { Link, useNavigate } from 'react-router-dom'
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
        if (currQues >18) {
            navigate("/result");
          } else if (selected) {
            setCurrQues(currQues + 1);
            setSelected();
          } else setError("Please select an option first");
        };
        const handleQuit = () => {
            setCurrQues(0);
            setQuestions();
          };
  return (
    <div>
        <h3>Question{currQues+1}:</h3>
        <div className=''>
            <h4>{questions[currQues].question}</h4>
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
             <div className='d-flex justify-content-evenly m-3 p-3'>
                <button onClick={handleQuit}  className='btn btn-warning'>Quit</button>
                <button onClick={handleNext} className='btn btn-info'>Next</button>
               
             </div>
            </div>
        </div>
   
  )
}

export default Question