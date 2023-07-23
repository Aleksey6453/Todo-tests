import React from 'react'

const HooksApp = () => {
    const compInitialCounter = () => {
        console.log('Some calculate')
        return Math.trunc(Math.random() * 20)
    }

    const [count, setCount] = React.useState(compInitialCounter)
    const [red, countRed] = React.useState(false)

    const [state, setState] = React.useState({
        title: 'Counter',
        date: Date.now()
    })

    const updateTitle = () => {
        setState(prev => {
            return {
                ...prev,
                title: 'New Title',
            }
        })
    }


  return (
    <div className='todo_wrap'>
      <h1>
        Hooks!!!
      </h1>
      <div className='gorizont'>
        <button className="btn" onClick={()=>setCount(prev => prev + 1)}>+</button>

        <p>{count}</p>
        <button className="btn" onClick={()=>setCount(prev => prev - 1)}>-</button>
      </div>
      <div className="gorizont">
      <button className="btn" onClick={updateTitle}>Change title</button>
        <pre>
            {JSON.stringify(state, null, 2)}
        </pre>
      </div>
     
    </div>
  )
}

export default HooksApp
