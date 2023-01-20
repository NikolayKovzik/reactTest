import { React } from 'react';

import './styles/App.css'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/UI/NavBar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const savedIsAuth = localStorage.getItem('auth') === 'true' ? true : false;
    setIsAuth(savedIsAuth);
    setIsLoading(false);
  }, [])
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
