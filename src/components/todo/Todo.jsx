import React from 'react'


const Todo = () => {
const [todos, setTodos] = React.useState([])
const [text, setText] = React.useState('')

const addTodo = () => {
  if (text.trim().length) {
    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        text,
        completed: false,
      }
    ])
  }
}

const removeTodo = (todoId)=>{
  setTodos(todos.filter(todo => todo.id !== todoId))
}

  return (
    <div className='todo_wrap'>
      <h1>
        Todo
      </h1>
      <div className="todo_content">
        <label htmlFor="" className='todo_card'>
          <input className='input' type="text" onChange={(e) => setText(e.target.value)} />
          <button className='btn' onClick={addTodo}>Add todo</button>
        </label>

        <ul>
          {
            todos.map(todo => <li key={todo.id} className='todo_li'>
              <input type='checkbox' checked={todo.completed}/>
              <span>{todo.text}</span>
              <span className='delete' onClick = {() => removeTodo(todo.id)} >&times;</span>
            </li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default Todo
