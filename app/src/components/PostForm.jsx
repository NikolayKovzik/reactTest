import React, {useState} from 'react'
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({createPost}) => {
  const [post, setPost] = useState({title: '', body: ''});
  // const inputElement = useRef();

  const addItem = (event) => { 
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body
    }
    createPost(newPost)
    setPost({title: '', body: ''});
  };
  return (
    <form>
      {/* <MyInput ref={inputElement} type="text" placeholder="Описание поста" /> */}
      <MyInput value={post.title} onChange={(event) => { setPost({ ...post, title: event.target.value }) }} type="text" placeholder="Название поста" />
      <MyInput value={post.body} onChange={(event) => { setPost({ ...post, body: event.target.value }) }} type="text" placeholder="Описание поста" />
      <MyButton onClick={(event)=>{addItem(event)}}>CREATE POST</MyButton>
    </form>
  )
}

export default PostForm