import React, { useCallback } from 'react';
import { Categories, PizzaBlock, SortPopup } from '../components';
import { useDispatch, useSelector } from 'react-redux';

import { setCategory } from '../redux/actions/filters';

const categoryNames = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

export const Home = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas &&
          pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </>
  );
};
