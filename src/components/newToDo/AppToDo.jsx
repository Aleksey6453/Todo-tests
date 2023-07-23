import React from 'react'
import { ToDoList } from './componentsNew/ToDoList'
import { ToDoForm } from './componentsNew/ToDoForm'
import { useEffect } from 'react'

const AppToDo = () => {
  const [value, setValue] = React.useState('')
  const [todos, setTodos] = React.useState([])

  // const inputRef = React.useRef(null)

  const func = () => {
    if (value) {
      setTodos([ ...todos, {
        id: Date.now(),
        title: value,
        complete: false
      }])
      setValue('')
    }
  }
  // React.useEffect (() => {
  //   if (inputRef.current) inputRef.current.focus()
  // }, [])

  return (
    <div className='todo_wrap'>
      <h1>New ToDo</h1>
      <ToDoForm value={value}
                setValue={setValue}
                func={func} 
               />
      <ToDoList items={todos} />
    </div>
  )
}

export {AppToDo} 
