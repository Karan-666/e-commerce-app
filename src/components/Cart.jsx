import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQuantity } from '../utils/cartSlice';
import { decreaseQuantity } from '../utils/cartSlice';
import { removeItem } from '../utils/cartSlice';

function Cart() {

  const cartItems = useSelector(store => store.cart.items);

  const dispatch = useDispatch();

  function handleDecrease(id){
    dispatch(decreaseQuantity(id));
  }

  function handleIncrease(id){
    dispatch(increaseQuantity(id));
  }

  function handleRemove(id){
    dispatch(removeItem(id));
  }

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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      {/* This div is for our list of cart items. */}
      <div className="space-y-4">
        {/* We loop through each item in the cart and display its details. */}
        {cartItems.map((item) => (
          // The key is very important for lists in React.
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex items-center">
            {/* The image of the product. */}
            <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded-md mr-4" />
            {/* The details of the product. */}
            <div className="flex-grow">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">${item.price}</p>
            </div>
            {/* These are the quantity controls. */}
            <div className="flex items-center space-x-2">
              {/* The '-' button */}
              <button 
                onClick={() => handleDecrease(item.id)}
                className="bg-gray-200 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold cursor-pointer"
              >
                -
              </button>
              {/* Displaying quantity */}
              <span className="font-bold text-lg">{item.quantity}</span>
              {/* The '+' button */}
              <button 
                onClick={() => handleIncrease(item.id)}
                className="bg-gray-200 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold cursor-pointer"
              >
                +
              </button>
            </div>
            
            {/* This is the remove button. */}
            <button 
              onClick={() => handleRemove(item.id)}
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 cursor-pointer"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;