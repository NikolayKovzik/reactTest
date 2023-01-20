import { useEffect } from 'react';
import { React, useState } from 'react';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/MyModal/MyModal';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetch';
import { getPageCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';
import { useRef } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  /*** */
  const renderCounter  = useRef(0);
  renderCounter.current = renderCounter.current + 1;
  console.log('renderCounter.current', renderCounter.current);
  /*** */

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({ selectedSort: '', searchQuery: '' });
  const [isModalWindowVisible, setIsModalWindowVisible] = useState(false);
  const searchedAndSortedPosts = usePosts(posts, filter.selectedSort, filter.searchQuery);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    // const start = new Date().getTime();
    // let i = 0
    // console.log('before loop: ')
    // while(i < 100000000) {
    //   i++
    // }
    // console.log('after loop: ', new Date().getTime() - start )
    console.log('before server request')
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    console.log('after server request')
    setTotalPages(getPageCount([response.headers['x-total-count']], limit));
  });


  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  }

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

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
        postError && <h1>Произошла ошибка! ${postError}</h1>
      }
      {
        isPostsLoading
          ? <Loader />
          : <PostList posts={searchedAndSortedPosts} title={'посты про JS'} deletePost={deletePost} />
      }
      <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
    </div>
  );
}

export default Posts;
