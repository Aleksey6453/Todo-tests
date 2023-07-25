import React from 'react'

const NewTodoItem = ({id, title, complete, funcDelTodo, funcToggleTodo}) => {
    // const {id, title, complete} = props
  return (
    <div className='gorizont2'>
      <input type="checkbox" checked={complete} onChange={() => {funcToggleTodo(id)}} />
      {title}
      <button className='btn' onClick={() => {funcDelTodo(id)}}>Del</button>
    </div>
  )
}

export {NewTodoItem}
