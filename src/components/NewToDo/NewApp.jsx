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

        
  return (
    <div className='todo_wrap'>
      <h1>New App</h1>
      <NewForm value={value} setValue={setValue} funcAdd={funcAdd} />
      <NewTodoList items = {todos} />
    </div>
  )
}

export {NewApp}
