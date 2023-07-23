import React, {useState} from 'react';
import './style/style.css'
import Kabzda from './components/Kabzda';
import Kabzda_two from './components/Kabzda_two';
import Post_list from './components/Post_list';
import PostForm from './components/PostForm';
import TodoApp from './components/todo/TodoApp';
import HooksApp from './components/hooksTest/HooksApp';
import HooksAppEffect from './components/hooksTest/HooksAppEffect';
import HooksAppRef from './components/hooksTest/HooksAppRef';

import {AppToDo} from './components/newToDo/AppToDo'



function App() {


  const [posts, setPosts] = useState([
    {id: 1, title: "JavaScripkaOleg", text: 'Description'},
    {id: 2, title: "JavaScriptonit", text: 'Description'},
    {id: 3, title: "JavaGrib", text: 'Description'},
  ])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const delPost = (post) => {
    setPosts(posts.filter(p=> p.id !== post.id))
  }

  return (
    <div className="App">
      <AppToDo />

      <HooksAppRef />
      <HooksAppEffect />
      <HooksApp />

      <TodoApp />
      
      <PostForm create={createPost} />
      {posts.length !== 0
        ? <Post_list del = {delPost} posts={posts} title={'List of posts 1'} />
        : <h1>Sorry, items for List are ended</h1>
      }
      

      <br/>
      <br/>
      <br/>
      <br/>
      <PageTitle title={'This is Title by page'}/>
      <PageTitle title={'This is Title by page about Zalupa'}/>
      <PageTitle title={'Fucking Props'}/>
      <Kabzda />
      <h3>Articles 1</h3>
      <Kabzda_two value={2} /> <br/>
      <h3>Articles 2</h3>
      <Kabzda_two value={5} /> <br/>
       
    </div>
  );
}

const PageTitle = (props) => {
  console.log('PageTitle rendering')
  return(
    <h1>{props.title}</h1>
  )
}

export default App;
