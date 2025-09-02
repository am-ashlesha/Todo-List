
import { FaCheckCircle, FaTrash } from 'react-icons/fa'
type TodoProp={
    todo:{
        id:number;
        text:string;
        completed:boolean;
    };
    completeTodo:(id:number)=>void;
    deleteTodo:(id:number)=>void;
}
function Todo({todo,completeTodo,deleteTodo}:TodoProp) {
  return (
    <div>
        <div className='bg-purple-800 p-2 rounded-md flex justify-between items-center my-4'>
          <p className={`${todo.completed===true?"line-through":""}`}>{todo.text}</p>
          <div className='flex items-center gap-2v cursor-pointer'>
            <FaCheckCircle className='hover:text-gray-400' onClick={()=>completeTodo(todo.id)}/>
            <FaTrash className='hover:text-gray-400 'onClick={()=>deleteTodo(todo.id)}/>
          </div>
        </div>
    </div>
  )
}

export default Todo