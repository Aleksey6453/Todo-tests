import React from 'react'
import { ToDoItem } from './ToDoItem'

const ToDoList = (props) => {
  return (
    <div className='list'>
      {
        props.items.map(todo => <ToDoItem key={todo.id} {...todo} />)
      }
    </div>
  )
}

export {ToDoList}
