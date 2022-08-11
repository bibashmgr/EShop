import React from 'react';

// components
import NavBar from '../components/NavBar';
import CustomHeader from '../components/CustomHeader';
import CartProducts from '../components/CartProducts';

// utils
import { products } from '../utils/products.js';

const Cart = () => {
  return (
    <>
      <NavBar />
      <CustomHeader headerTitle='My Cart' />
      <CartProducts product={products} />
    </>
  );
};

export default Cart;
