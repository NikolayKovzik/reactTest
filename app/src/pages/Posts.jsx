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
import MySelect from '../components/UI/select/MySelect';

function Posts() {
  const [posts, setPosts] = useState([]);
  /*** */
  // const renderCounter = useRef(0);
  // renderCounter.current = renderCounter.current + 1;
  // console.log('renderCounter.current', renderCounter.current);
  /*** */

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({ selectedSort: '', searchQuery: '' });
  const [isModalWindowVisible, setIsModalWindowVisible] = useState(false);
  const searchedAndSortedPosts = usePosts(posts, filter.selectedSort, filter.searchQuery);
  const lastElement = useRef();
  const observer = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    setTotalPages(getPageCount([response.headers['x-total-count']], limit));
  });


  const changePage = (page) => {
    setPage(page);
  }

  useEffect(() => {
    if (isPostsLoading) return;
    if (observer.current) observer.current.disconnect();
    const observerCallback = function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting && page < totalPages) {
          setPage((prev) => prev + 1)
        }
      })
    }
    observer.current = new IntersectionObserver(observerCallback);
    observer.current.observe(lastElement.current)
  }, [isPostsLoading]);  // это зависимость от ссылки на элемент, или от значения примитива?
  
  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

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
      <MySelect
        value={limit}
        onChange={e => setLimit(e.target.value)}
        defaulValue="количество элементов на странице"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'Показать всё' },
        ]}
      />
      {
        postError && <h1>Произошла ошибка! ${postError}</h1>
      }
      <PostList posts={searchedAndSortedPosts} title={'посты про JS'} deletePost={deletePost} />
      <div ref={lastElement} style={{ height: 20, background: 'red' }}></div>

      {isPostsLoading && <Loader />}

      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}

export default Posts;
