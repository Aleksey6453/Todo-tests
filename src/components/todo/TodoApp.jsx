import React from 'react'
import InputField from './todoComponents/InputField'
import TodoList from './todoComponents/TodoList'

const TodoApp = () => {
    const [todos, setTodos] = React.useState([])
    const [text, setText] = React.useState('')

    const addTodo = () => {
        if (text.trim().length){
            setTodos([
                ... todos,
                {
                    id: new Date().toISOString(),
                    text,
                    completed: false

                }
            ])
            setText('')
        }
    }

    const removeTodo = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    const toggleTodoComplete = (todoId) => {
        setTodos(
            todos.map(
               todo => {
                if (todo.id !== todoId) return todo

                return {
                    ... todo,
                    completed: !todo.completed,
                }
               } 
            )
        )
    }

  return (
    <div className='todo_wrap'>
      <h1>Todo</h1>
      {/* <label className='todo_li'>
        <input value={text} 
                className='input' 
                onChange={(e)=> setText(e.target.value)} />
        <button className="btn" 
                onClick={addTodo}>Add Todo</button>
      </label> */}

      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />

      <TodoList todos={todos} 
                toggleTodoComplete={toggleTodoComplete} 
                removeTodo={removeTodo}/>
      {/* <ul>
        {
            todos.map(todo => <li key={todo.id} className='todo_card'>
                <input type="checkbox" 
                        checked={todo.completed} 
                        onChange={() => toggleTodoComplete(todo.id)} />
                <span>{todo.text}</span>
                <span className='delete' 
                      onClick={() => removeTodo(todo.id)}>
                        &times;
                </span>
            </li>)
        }
      </ul> */}
    </div>
  )
}

export default TodoApp
