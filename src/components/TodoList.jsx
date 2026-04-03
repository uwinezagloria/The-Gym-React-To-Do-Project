import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const listOfTodos=({todos,checkingTodo,deleteTodo})=>{
    
    let array=todos.map((todo)=>{
return (
    
   
    todo.show &&(
         <>
    <li key={todo.id} className="flex flex-row gap-40 items-center justify-between w-full">
        <input type="checkbox" name="check" checked={todo.completed} onChange={()=>checkingTodo(todo.id)} />   
        {todo.completed?<s>{todo.title}</s>:todo.title}
        <button onClick={()=>deleteTodo(todo.id)} >
  <FontAwesomeIcon icon={faTrash} className="text-red-500 w-5 h-5"  />
</button>
        </li>
       <p className="border-1  w-full my-2 text-gray-500"></p>
    
        </>
    ))
    })
    //console.log(FormData.getAll("check"))
    return (
        <ul>
            {array}</ul>
    )
     
}
export default listOfTodos