import React from 'react'

const ToDoItem = (props) => {
    const {id, title, complete} = props;
  return (
    <div className='gorizont2'>
      <input type="checkbox" checked={complete} />
      <h2>{title}</h2>
      <button className='btn'>x</button>
    </div>
  )
}

export {ToDoItem}