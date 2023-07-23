import React from 'react'

const HooksAppRef = () => {
    const [number, setNumber] = React.useState(42)
    const [colored, setColored] = React.useState(false)
    const styles = {
        color: colored ? "red" : "lime"
    }
    const complexComputed = (num) => {
        let i = 0
        while (i < 1000000000) i++
        return num * 2
    }

    const computed = React.useMemo(()=>{
        return complexComputed(number)
    }, [number])


  return (
    <div className='todo_wrap'>
      <div className='gorizont'>
        <button className="btn" onClick={()=>setNumber(prev => prev + 1)}>+</button>
        <p style={styles}>{computed}</p>
        <button className="btn" onClick={()=>setNumber(prev => prev - 1)}>-</button>
      </div>
      <div className='gorizont'>
        <button className="btn" onClick={()=>setColored(prev => !prev)}>Change</button>
      </div>
    </div>
  )
}

export default HooksAppRef
