import React from 'react';

// components
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import Products from '../components/Products';

const Home = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Products />
    </>
  );
};

export default Home;
