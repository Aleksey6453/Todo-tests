import React, {useState} from 'react'
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';


const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', test: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create({newPost})
        setPost({title: '', text: ''})
      }
  return (
      <form>
        <MyInput value={post.title} 
                type='text'
                onChange={(e) => setPost({...post, title: e.target.value})} 
                placeholder='add title please'/>
              
        <MyInput value={post.text}
                onChange={(e) => setPost({...post, text: e.target.value})} 
                type='text'
                placeholder='add text about post please'/>       
        <MyButton onClick={addNewPost}>Make new post</MyButton>
      </form>
  )
}

export default PostForm
