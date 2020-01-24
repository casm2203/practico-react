import React from 'react';
import Header from './components/Header'
import './App.css';
import Search from './components/Search';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Categories />
    </div>
  );
}

export default App;
