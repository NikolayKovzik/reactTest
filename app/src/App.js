import React from 'react'
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <PostItem post={{id: 1, title: 'Javascript', body: 'Descripptions'}}/>
    </div>
  );
}

export default App;
