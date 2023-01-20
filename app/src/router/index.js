import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import PostCommentsPage from "../pages/PostCommentsPage";
import Login from "../pages/Login";
import { Navigate } from 'react-router-dom';


export const privateRoutes = [
    {path: '/about', component: <About/>},
    {path: '/posts', component: <Posts/>},
    {path: '/posts/:id', component: <PostIdPage/>},
    {path: '/posts/:id/comments', component: <PostCommentsPage/>},
    {path: '*', component: <Error/>},
    {path: '/', component:<Navigate to={'/posts'} replace />},
    {path: '/login', component:<Navigate to={'/posts'} replace />},
]

export const publicRoutes = [
    {path: '/login', component: <Login/>},
    {path: '*', component: <Navigate to={'/login'} replace />},
]