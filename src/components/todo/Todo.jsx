import React from 'react'
import TodoList from './TodoList'
import InputField from './InputField'


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
    setText('');
  }
}

const removeTodo = (todoId)=>{
  setTodos(todos.filter(todo => todo.id !== todoId))
}
const toggleTodoComplete = (todoId) => {
    setTodos(
      todos.map(
        todo => {
          if(todo.id !== todoId) return todo;

          return {
            ...todo,
            completed: !todo.completed,
          }  
        }
      )
    )
}
  return (
    <div className='todo_wrap'>
      <h1>
        Todo
      </h1>
      <div className="todo_content">
        {/* <label className='todo_card'>
          <input className='input' type="text" onChange={(e) => setText(e.target.value)} />
          <button className='btn' onClick={addTodo}>Add todo</button>
        </label> */}
        <InputField text={text} 
                    handleInput={setText} 
                    handleSubmit={addTodo}/>

        <TodoList todos ={todos} 
                  toggleTodoComplete={toggleTodoComplete} 
                  removeTodo={removeTodo} />

        {/* <ul>
          {
            todos.map(todo => <li key={todo.id} className='todo_li'>
              <input type='checkbox' 
                     checked={todo.completed} 
                     onChange={() => toggleTodoComplete(todo.id)} />
              <span>{todo.text}</span>
              <span className='delete' onClick = {() => removeTodo(todo.id)} >&times;</span>
            </li>)
          }
        </ul> */}
      </div>
    </div>
  )
}

export default Todo
