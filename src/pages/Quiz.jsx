import React, { useEffect,useState } from 'react'
import Question from '../components/Question';
import Timer from '../components/Timer';
import Spinner from 'react-bootstrap/Spinner';
function Quiz({name,total,setTotal,questions,setQuestions}) {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
    useEffect(() => {
        setOptions(
          questions &&
            handleShuffle([
              questions[currQues]?.correct_answer,
              ...questions[currQues]?.incorrect_answers,
            ])
        );
      }, [currQues, questions]);
    
      console.log(questions);
    
      const handleShuffle = (optionss) => {
        return optionss.sort(() => Math.random() - 0.5);
      };
  return (
    <div className='d-flex flex-wrap flex-column w-75 bg-light p-3 border rounded shadow'>
        <h3 className='text-center text-shadow fw-bolder p-3'>Welcome,<span className='text-success'>{" "+name}</span></h3>
       <div>
        {
          questions?(
            <div className='row'>
            <div className="d-flex justify-content-between align-items-center w-100 text-danger fw-bolder">
            <span>{questions[currQues].category}</span>
          <div className='d-flex flex-column' >  <Timer duration={1*60*1000}/>
          <span className='mt-3'>
              
              Score : {total}/10
            </span>
          </div>
           
          </div>
          <Question
          currQues={currQues}
          total={total}
          setCurrQues={setCurrQues}
          questions={questions}
          options={options}
          correct={questions[currQues]?.correct_answer}  
          setTotal={setTotal}
          setQuestions={setQuestions}        />
            </div>
          ):<div className='d-flex align-items-center justify-content-center'>
           <Spinner animation="border" variant="info" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          </div>
        }
       </div>
        
    </div>
  )
}

export default Quiz