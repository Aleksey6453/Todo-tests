import React from 'react'
import TodoItem from './TodoItem'

const todos = [
    {
        title: 'Actions 1',
        isCompleted: false
    },
    {
        title: 'Actions 27',
        isCompleted: false
    },
    {
        title: 'Actions 36',
        isCompleted: false
    },
    {
        title: 'Actions 45',
        isCompleted: false
    },
]

const Todo = () => {
  return (
    <div>
      <h2>
        Todos
      </h2>
      {
        todos.map(todo => (
            <TodoItem todo={todo}/>
        ))
      }
    </div>
  )
}

export default Todo
