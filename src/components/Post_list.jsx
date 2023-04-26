import React from 'react'
import Post from './Post'

const Post_list = ({posts, title, del}) => {
  return (
    <div className='App'>
        <h1>{title}</h1>  
        {posts.map( (post, index) =>
            <Post del={del} number={index + 1} info = {post} key = {post.id}/>
        )}
    </div>
  )
}

export default Post_list
