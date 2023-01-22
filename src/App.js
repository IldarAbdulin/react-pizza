import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {Header} from './components'
import { Home, Cart } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
