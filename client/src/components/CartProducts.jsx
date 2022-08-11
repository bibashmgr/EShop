import React from 'react';
import { Flex, Grid, Text } from '@chakra-ui/react';

// components
import CartProductCard from './CartProductCard';

const CartProducts = ({ products }) => {
  return (
    <>
      {products.length < 1 ? (
        <Flex justify='center' align='center' w='full' minHeight='40vh'>
          <Text fontSize='md' fontWeight='medium' color='gray.500'>
            Cart is empty.
          </Text>
        </Flex>
      ) : (
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
      )}
    </>
  );
};

export default CartProducts;
