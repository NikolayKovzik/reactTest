import { useEffect } from 'react';
import { React, useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import './styles/App.css'
import Loader from './components/UI/Loader/Loader';

function App() {
  const [posts, setPosts] = useState([]
  );

  const [filter, setFilter] = useState({ selectedSort: '', searchQuery: '' });
  const [isModalWindowVisible, setIsModalWindowVisible] = useState(false);
  const [isPostsLoading, setIsPostsLoading] = useState(true);
  const searchedAndSortedPosts = usePosts(posts, filter.selectedSort, filter.searchQuery);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const response = await PostService.getAll();
    setPosts(response.data);
    setIsPostsLoading(false);
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  return (
    <div className="App">
      <MyButton onClick={() => { setIsModalWindowVisible(true) }}>
        Создать Пользователя
      </MyButton>
      <MyModal visible={isModalWindowVisible} setVisible={setIsModalWindowVisible}>
        <PostForm createPost={createPost} />
      </MyModal>
      <hr style={{ marginTop: '20px' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {
        isPostsLoading
          ? <Loader/>
          : <PostList posts={searchedAndSortedPosts} title={'посты про JS'} deletePost={deletePost} />
      }
    </div>
  );
}

export default App;
