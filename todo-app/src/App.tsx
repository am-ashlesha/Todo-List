import Todo from './Todo';
import './App.css'
import { useState } from 'react';
type Todos={
  id:number,
  text:string,
  completed:boolean
}

function App() {
 
    const [Input, setInput] = useState<string>("");
    const[todos,setTodos] =useState<Todos[]>([]);
     
      const addTodo=()=>{
        if(!Input.trim()) return;
        const newTodo={
          id:Date.now(),
          text:Input,
          completed:false,
        }

        setTodos((prevtodos)=>[...prevtodos,newTodo]);
        setInput("");
    }
    const completeTodo=(id:number)=>{
      setTodos(todos.map((todo)=>
      todo.id=== id?{...todo,completed:true}:todo
    ));
    };

    const deleteTodo=(id:number)=>{
      setTodos(todos.filter((todo)=>
        todo.id!==id));
    };
     return (
      <>
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
        <h1 className='text-center text-white text-xl font-bold '>Todos </h1>
       {todos.length > 0?(
        <>
         {todos.map((todo)=>{
          return( <Todo key={todo.id} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
       );
        })}
        
        </>
       ):
       (
        <h1 className='text-center text-white text-xl my-2'>You have completed your tasks.!</h1>
       )}
       </div>
      </div>
    </div>

    </>
  )
}

export default App
