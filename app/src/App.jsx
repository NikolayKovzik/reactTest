import { React, useMemo, useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Best lang' },
    { id: 2, title: 'TypeScript', body: 'best of all time lang' },
    { id: 3, title: 'CoffeScript', body: 'crap idknw' },
    { id: 4, title: 'assembler', body: 'better not use it' },
    { id: 5, title: 'C++', body: 'hard lvl motherfucker' },
    { id: 6, title: 'nodejs', body: 'use it everyday' },
    { id: 7, title: 'C#', body: 'for gigachads' },
    { id: 8, title: 'eliksir', body: 'cool lowlvl lang' },
  ]
  );

  const [filter, setFilter] = useState({selectedSort: '', searchQuery: ''});

  const sortedPosts = useMemo(() => {
    console.log('getsrtdpsts')
    if (filter.selectedSort) {
      return [...posts].sort((a, b) => a[filter.selectedSort].localeCompare(b[filter.selectedSort]))
    }
    return posts;
  }, [filter.selectedSort, posts]);

  const searchedAndSortedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.searchQuery.toLowerCase()))
  }, [filter.searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  return (
    <div className="App">
      <PostForm createPost={createPost} />
      <hr style={{ marginTop: '20px' }} />
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList posts={searchedAndSortedPosts} title={'посты про JS'} deletePost={deletePost} />
    </div>
  );
}

export default App;
