import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQuantity } from '../utils/cartSlice';
import { decreaseQuantity } from '../utils/cartSlice';
import { removeItem } from '../utils/cartSlice';
import CartItem from './CartItem';

function Cart() {

  const cartItems = useSelector(store => store.cart.items);


  // If the cart is empty, we show a message instead of the list.
  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-8 p-4">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    // main container for cart page
    <div className="container mx-auto p-4">
      {/* cart page heading */}
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      <div className="space-y-4">
        {/* Using the reusable CartItem component for each item in the cart. */}
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;