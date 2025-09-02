import React, { useState } from 'react'
import { FaCheckCircle, FaTrash } from 'react-icons/fa'

function TodoApp() {

    const [Input, setInput] = useState<string>("");
    const addTodo=()=>{
        console.log(Input);
        setInput("");
    }

     return (
     <div className=' bg-purple-950 w-screen p-2 min-h-screen flex justify-center items-center '>
       <div className='max-w-[500px] w-[90%] bg-slate-900 p-4 rounded-md shadow-md'>
        <h1 className='text-center text-white text-xl'>Todos for the day</h1>
        <div className='flex gap-2 justify-center my-8'>
          <input 
          value={Input}
          onChange={(e)=> setInput(e.target.value)}
          type ="text" 
          placeholder='Add Todo'
           className='flex-[3] border-2 outline-none border-gray-500 text-white placeholder-gray-500 p-2 rounded-md focus:border-white'/>
          <button 
          onClick={addTodo}
          className='bg-purple-800 flex-[1] cursor-pointer rounded-md text-sm hover:bg-purple-900'>Add Todo</button>
        </div>
      <div>
        <h1 className='text-center text-white text-xl'>Todos </h1>
        <div className='bg-purple-800 p-2 rounded-md flex justify-between items-center my-4'>
          <p>Go to market</p>
          <div className='flex items-center gap-2v cursor-pointer'>
            <FaCheckCircle className='hover:text-gray-400'/>
            <FaTrash/>
          </div>
        </div>
        <div className='bg-purple-800 p-2 rounded-md flex justify-between items-center my-4'>
          <p>Do laundry</p>
          <div className='flex items-center gap-2v cursor-pointer'>
            <FaCheckCircle className='hover:text-gray-400'/>
            <FaTrash/>
          </div>
        </div>
        <div className='bg-purple-800 p-2 rounded-md flex justify-between items-center my-4'>
          <p>Eat dinner</p>
          <div className='flex items-center gap-2v cursor-pointer'>
            <FaCheckCircle className='hover:text-gray-400'/>
            <FaTrash/>
          </div>
        </div>
      </div>
      </div>
    </div>

    
  )
}

export default TodoApp