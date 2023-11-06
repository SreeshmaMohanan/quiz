import { CircularProgress } from '@mui/material';
import React, { useEffect,useState } from 'react'
import Question from '../components/Question';

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
    <div className='w-50'>
        <h3 className='text-center text-shadow'>welcome,{name}</h3>
       <div>
        {
          questions?(
            <>
            <div className="d-flex justify-content-between w-100">
            <span>{questions[currQues].category}</span>
            <span>
              {/* {questions[currQues].difficulty} */}
              Score : {total}/20
            </span>
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
            </>
          ):<CircularProgress/>
        }
       </div>
        
    </div>
  )
}

export default Quiz