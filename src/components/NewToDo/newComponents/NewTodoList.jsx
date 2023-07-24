import React from 'react'
import { NewTodoItem } from './NewTodoItem'

const NewTodoList = (props) => {
  return (
    <div className='list'>
      {
        props.items.map(todo => <NewTodoItem key={todo.id} {...todo} />)
      }
    </div>
  )
}

export {NewTodoList}
