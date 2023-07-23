import React from 'react'

const HooksAppEffect = () => {
  const [type, setType] = React.useState('users')
  const [data, setData] = React.useState([])
  const [pos, setPos] = React.useState({
    x: 0,
    y: 0
  })

  React.useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type])

  React.useEffect(()=>{
    console.log('ComponentDidMount')

    window.addEventListener('mousemove',(e)=>{
      setPos({
        x: e.clientX,
        y: e.clientY
      })
    })
  }, [])

  return (
    <div className='todo_wrap'>
        <h2> Use Effect</h2>
        <h3>{type}</h3>
        <div className="gorizont">
          <button className="btn" onClick={()=>setType('users')}>users</button>
          <button className="btn" onClick={()=>setType('todos')}>todos</button>
          <button className="btn" onClick={()=>setType('posts')}>posts</button>
        </div>
        <div className="gorizont">
          {/* <pre>
            {JSON.stringify(data, null, 2)}
          </pre> */}
          <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    </div>
  )
}

export default HooksAppEffect
