import React from 'react';
import { useSelector } from 'react-redux';

// components
import NavBar from '../components/NavBar';
import CustomHeader from '../components/CustomHeader';
import CartProducts from '../components/CartProducts';

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  return (
    <>
      <NavBar />
      <CustomHeader headerTitle='My Cart' />
      <CartProducts products={cartProducts} />
    </>
  );
};

export default Cart;
