import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components';
import { setPizzas } from './redux/actions/pizzas';
import { Home, Cart } from './pages';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/pizzas`)
      .then(({ data }) => dispatch(setPizzas(data)));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
