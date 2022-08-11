import React from 'react';
import { Grid } from '@chakra-ui/react';

// components
import ProductCard from './ProductCard';

const Products = ({ products }) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(2, 1fr)',
        sm: 'repeat(2,1fr)',
        md: 'repeat(3,1fr)',
        lg: 'repeat(4,1fr)',
        xl: 'repeat(5,1fr)',
      }}
      gap={{ base: '4', md: '6' }}
      px={{ base: '25px', md: '50px', xl: '75px' }}
      pb={{ base: '25px' }}
    >
      {products.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </Grid>
  );
};

export default Products;
