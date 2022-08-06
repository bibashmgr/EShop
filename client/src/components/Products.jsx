import React from 'react';
import { Grid } from '@chakra-ui/react';

// components
import ProductCard from './ProductCard';

// utils
const products = [
  {
    id: '1',
    name: 'Iphone 13 Pro Max',
    desc: 'This is the lastest version of Iphone 13 series.',
    price: '134',
  },
  {
    id: '2',
    name: 'Iphone 12 Pro Max',
    desc: 'This is the lastest version Iphone 12 series.',
    price: '99',
  },
  {
    id: '3',
    name: 'Iphone 11 Pro Max',
    desc: 'This is the lastest version of Iphone 11 series.',
    price: '89',
  },
  {
    id: '4',
    name: 'Iphone 10 Pro Max',
    desc: 'This is the lastest version of Iphone 10 series.',
    price: '69',
  },
  {
    id: '5',
    name: 'Iphone 8',
    desc: 'This is the lastest version of Iphone 8 series.',
    price: '49',
  },
];

const Products = () => {
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
