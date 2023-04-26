import React from 'react'
import MyButton from './UI/button/MyButton';

 const Post = (props) => {

  return (
    <div className='postCart'>
        <div>
            <h1 className='postCartTitle'>{props.number}. {props.info.title}</h1>
            <h2 className='postCartText'>{props.info.text}</h2>
        </div>
        <div>
            <MyButton onClick={()=>props.del(props.info)}>
              Delete
            </MyButton>
        </div>
        <br />
        <br />
    </div>
  )
}

export default Post;





