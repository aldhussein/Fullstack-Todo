import React from 'react'
import { TodoItem } from './Todos'
import DoneTodo from './DoneTodo'
import DeleteTodo from './DeleteTodo'

const Todo = ({todo}: {todo : TodoItem}) => {
    
  return (
    <li className='flex justify-between'>
      <div>
        <span className={`text-xl font-semibold ${todo.isDone && 'line-through'}`}>{todo.title}</span>
      </div>

      <div>
         <DoneTodo todoId={todo.id} isDone={todo.isDone}/>
         <DeleteTodo todoId={todo.id}/>
      </div>
    </li>
  )
}

export default Todo