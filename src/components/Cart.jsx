import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQuantity } from '../utils/cartSlice';
import { decreaseQuantity } from '../utils/cartSlice';
import { removeItem } from '../utils/cartSlice';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

function Cart() {

  const cartItems = useSelector(store => store.cart.items);


  // If the cart is empty, we show a message instead of the list.
  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-8 p-4 pt-15">
        <h1 className="text-3xl font-bold mb-4 mt-10">Your Cart</h1>
        <p className="text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    // main container for cart page
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-35 pt-10">
      {/* cart page heading */}
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      <div className="space-y-4">
        {/* Using the reusable CartItem component for each item in the cart. */}
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
     {/* This is the checkout button. */}
      <div className="mt-8 text-right">
        <Link 
          to="/checkout" 
          className="bg-green-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-600"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;