
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateToDo from './components/TodoCreate.jsx'
import TodoList from './components/TodoList.jsx'

import React, { useState } from 'react';
function App() {
  const [todos,setTodo]=React.useState([])
    const createTodo=(title)=>{
      const newTodo={
        id:crypto.randomUUID(),
        title:title,
        completed:false
      }
 setTodo((prev)=>[...prev,newTodo])
    }
    //marking todo 
    const markTodo=(id)=>{
const updateTodo=todos.map(todo=>{
    return todo.id===id?{...todo,completed:!todo.completed}:todo
  
})
setTodo(updateTodo)
    }
    
  return (
    <section className="flex items-center justify-center  flex-col gap-10 mt-20 bg-blue-400 mx-40 py-20 rounded-4xl">
      <h1 className="text-6xl text-gray-600 font-bold">Todos</h1>
     <CreateToDo createtodo={createTodo} />
  <TodoList  todos={todos} checkingTodo={markTodo}/>
  
    </section>
  
   
    
  )
  
}

export default App
