import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SinglePost from './pages/SinglePost';
import PhotoDetail from './pages/PhotoDetail';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/post/:id' element={<SinglePost />} />
      <Route path='/photo/:id' element={<PhotoDetail />} />
    </Routes>
  );
};

export default App;
