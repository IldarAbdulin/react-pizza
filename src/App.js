import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components';
import { setPizzas } from './redux/actions/pizzas';
import { Home, Cart } from './pages';

function App() {
  const dispatch = useDispatch();
  const { pizzas } = useSelector(({pizzas, filters}) => {
    return {
      pizzas: pizzas.items,
      sortBy: filters.sortBy
    }
  })

  useEffect(() => {
    axios
      .get(`http://localhost:3000/db.json`)
      .then(({ data }) => dispatch(setPizzas(data.pizzas)))
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home pizzas={pizzas} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
