import React from 'react'

const TodoItem = ({id, text, completed, removeTodo, toggleTodoComplete}) => {
  return (
        <li key={id} className='todo_card'>
            <input type="checkbox" 
                    checked={completed} 
                    onChange={() => toggleTodoComplete(id)} />
            <span>{text}</span>
            <span className='delete' 
                    onClick={() => removeTodo(id)}>
                    &times;
            </span>
        </li>
  )
}

export default TodoItem
