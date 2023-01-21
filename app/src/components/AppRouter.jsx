import React from 'react'
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';

import { privateRoutes, publicRoutes } from '../router'
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <Loader />
  }
  return (
    <Routes>
      {
        (isAuth ? privateRoutes : publicRoutes).map((route) => {
          return <Route key={Date.now()} path={route.path} element={route.component} />
        })
      }
    </Routes>

  )
}

export default AppRouter