import { TextField,MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Categories from '../Categories';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home({ name, setName, fetchQeastions }) {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate()
    const handleSubmit=()=>{
        
        if(!category||!difficulty||!name){
            setError(true)
            toast.error('please fill the form completely  !!!')
            return
        }else{
            setError(false)
            fetchQeastions(category,difficulty)
            navigate('/quiz')
        }
    }

  return (
    <div className='w-75 d-flex flex-column flex-wrap align-items-center justify-content-center bg-light  border rounded shadow'>
       <div   className='text-dark bg-light mt-5 align-items-center justify-content-center p-2 rounded'><h1>Quiz App</h1></div>
        <div className='d-flex flex-wrap pb-5 pt-5 ps-2 pe-2 flex-column w-50 '>
            
        <TextField
            style={{ marginBottom: 25}}
            label=" Name"
            variant="outlined"
            
            onChange={(e)=>setName(e.target.value)}
            value={name}
            
            
          />
          <TextField
          select
            style={{ marginBottom: 25}}
            label="Select category"
            variant="outlined"
            onChange={(e)=>setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
          select
            style={{ marginBottom: 25 }}
            label="Select difficulty"
            variant="outlined"
            onChange={(e)=>setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <button onClick={handleSubmit} className='btn btn-success'>Start Quiz</button>
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

export default Home