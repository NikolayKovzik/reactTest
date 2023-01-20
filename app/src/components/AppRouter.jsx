import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';

import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostCommentsPage from '../pages/PostCommentsPage';

import PostIdPage from '../pages/PostIdPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/posts/:id' element={<PostIdPage />} />
      <Route path='/posts/:id/comments' element={<PostCommentsPage />} />
      <Route path="/" element={<Navigate to={'/posts'} replace />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default AppRouter