import React from 'react'
import { NewForm } from './newComponents/NewForm'
import { NewTodoList } from './newComponents/NewTodoList'

const NewApp = () => {
    const [value, setValue] = React.useState('')
    const [todos, setTodos] = React.useState([])

    const funcAdd = () => {
        if (value){
           setTodos([...todos,{
            id:Date.now,
            title: value,
            comlete: false
           }])
           setValue('')
           }
        }
     
    const funcDelTodo = (id) => {
      // setTodos(todos.filter(todo => todo.id !== id))

      const updateTodosArr = [... todos]
      updateTodosArr.splice(id, 1)
      setTodos(updateTodosArr)
    }  
    
    const funcToggleTodo = () => {

    }

        
  return (
    <div className='todo_wrap'>
      <h1>New App</h1>
      <NewForm  value={value} 
                setValue={setValue} 
                funcAdd={funcAdd} />
      <NewTodoList items = {todos} 
                   funcDelTodo={funcDelTodo} 
                   funcToggleTodo={funcToggleTodo} />
    </div>
  )
}

export {NewApp}
