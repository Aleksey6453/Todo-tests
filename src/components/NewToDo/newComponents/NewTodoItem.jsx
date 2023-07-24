import React from 'react'

const NewTodoItem = ({id, title, complete}) => {
    // const {id, title, complete} = props
  return (
    <div className='gorizont2'>
      <input type="checkbox" checked={complete} />
      {title}
      <button className='btn'>x</button>
    </div>
  )
}

export {NewTodoItem}
