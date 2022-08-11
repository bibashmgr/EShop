import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

// components
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import Products from '../components/Products';

// actions
import { setProducts } from '../features/productsSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  const getProducts = async () => {
    await axios
      .get('http://localhost:9999/api/product')
      .then((res) => res.data)
      .then((result) => {
        const { status, data, message } = result;
        if (status === 'ok') {
          dispatch(setProducts(data));
          console.log(message);
        }
        if (status === 'fail') {
          console.log(message);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <NavBar />
      <SearchBar />
      <Products />
    </>
  );
};

export default Home;
