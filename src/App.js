import { Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [name,setName]=useState("")
  const [questions,setQuestions]=useState()
  const [total,setTotal]=useState(0)
  const fetchQeastions =async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=20${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <div className="d-flex flex-wrap flex-column w-100 align-items-center justify-content-center" style={{height:'100vh'}}>
      <div><h1>Quiz App</h1></div>
      <Routes>
        <Route path='/' element={<Home name={name} setName={setName} fetchQeastions={fetchQeastions} />}></Route>
        <Route path='/quiz' element={<Quiz name={name} questions={questions} total={total} setTotal={setTotal} setQuestions={setQuestions}  />}></Route>
        <Route path='/result' element={<Result name={name} total={total} />}></Route>
      </Routes>
     
    </div>
  );
  }

export default App;
