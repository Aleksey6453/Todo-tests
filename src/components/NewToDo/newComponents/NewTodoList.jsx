import React from 'react'
import { NewTodoItem } from './NewTodoItem'

const NewTodoList = ({funcDelTodo, funcToggleTodo, items}) => {
  return (
    <div className='list'>
      {
        items.map(todo => <NewTodoItem key={todo.id} 
                                        funcToggleTodo={funcToggleTodo}
                                        funcDelTodo={funcDelTodo}  
                                        {...todo} />)
      }
    </div>
  )
}

export {NewTodoList}
