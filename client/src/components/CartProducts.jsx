import React from 'react';
import { Grid } from '@chakra-ui/react';

// components
import CartProductCard from './CartProductCard';

// utils
import { products } from '../utils/products.js';

const CartProducts = () => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
      }}
      gap={{ base: '4', md: '6' }}
      px={{ base: '25px', md: '50px', xl: '75px' }}
      pb={{ base: '25px' }}
    >
      {products.map((product, index) => {
        return <CartProductCard key={index} product={product} />;
      })}
    </Grid>
  );
};

export default CartProducts;
