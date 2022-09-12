import React, { useEffect, useState } from 'react';

// components
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import Products from '../components/Products';

// request methods:
import { userRequest } from '../api/requestMethods';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  const getProducts = async () => {
    await userRequest
      .get('/product')
      .then((res) => res.data)
      .then((result) => {
        const { status, data, message } = result;
        if (status === 'ok') {
          setProducts(data);
          console.log(data);
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
      <Products products={products} />
    </>
  );
};

export default Home;
