import { TextField,MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Categories from '../Categories';

function Home({ name, setName, fetchQeastions }) {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate()
    const handleSubmit=()=>{
        
        if(!category||!difficulty||!name){
            setError(true)
            return
        }else{
            setError(false)
            fetchQeastions(category,difficulty)
            navigate('/quiz')
        }
    }

  return (
    <div className='w-50 d-flex flex-wrap align-items-center justify-content-center'>
        <div  className='d-flex flex-column w-75 '>
            {error && <p className='text-danger'>please Fill the form completely !!!</p>}
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
          <button onClick={handleSubmit} className='btn btn-primary'>Start</button>
        </div>

    </div>
  )
}

export default Home