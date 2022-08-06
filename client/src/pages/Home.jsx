import React from 'react';
import { Grid } from '@chakra-ui/react';

// components
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';

const products = [{}, {}, {}, {}, {}, {}];

const Home = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Grid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          sm: 'repeat(3,1fr)',
          lg: 'repeat(5,1fr)',
        }}
        gap='4'
        px={{ base: '25px', md: '50px', xl: '75px' }}
      >
        {products.map((product, index) => {
          return <ProductCard key={index} />;
        })}
      </Grid>
    </>
  );
};

export default Home;
