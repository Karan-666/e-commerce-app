import React from "react";

/*
A slice needs three main things:
1. A name for the slice.
2. An initialState, which is the starting value of our cart (an empty array).
3. A reducers object, which contains all the functions that can change the state of the cart.
*/

// importing create slice
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  // name of slice
  name: "cart",
  // starting value of cart, an empty array
  initialState: {
    items: [],
  // Added a new property to hold our search query.
  searchQuery: '',
  },
  // Inside reducers, we will add functions to change cart state
  reducers: {
    // A "reducer" is a function that takes the current state and an "action" and returns a new state.
    // redux toolkit allow direct mutation safely
    addItem: (state, action) => {
      // action.payload will contain the product

      // checking if item already exist in our array

      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // if that item exist in cart, increase its quantity property to 1
        existingItem.quantity = existingItem.quantity + 1;
      } else {
        // If the item does not exist, we add it to the cart.
        // We create a new object with all the payload data and a new 'quantity' property.
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      // product id to remove
      const tempId = action.payload;
      // array without that product
      const tempArray = state.items.filter((item) => item.id !== tempId);
      state.items = tempArray;
    },

    increaseQuantity: (state, action) => {
      // finding the object to modify
      const item = state.items.find(
        (item) => item.id === action.payload
      );
      // increasing its quantity to 1.
      if (item) {
        item.quantity = item.quantity + 1;
      }
    },

    decreaseQuantity: (state, action) => {
      // finding the object to modify
      const item = state.items.find(
        (item) => item.id === action.payload
      );
      // if quantity is 1, remove product
      if (item.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
      else{
        item.quantity--;
      }
    },

    clearCart : (state , action) => {
      // empty the array by setting its length property to 0.
      state.items.length = 0;
    },

    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    }
  },
});

// by default exporting reducers for store to know what to do with cart state
export default cartSlice.reducer;

// exporting actions with named exports to be used in component with dispatcher function
export const {addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart, setSearchQuery } = cartSlice.actions;
