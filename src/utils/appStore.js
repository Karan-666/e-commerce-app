// src/utils/appStore.js

// We import configureStore from Redux Toolkit to create our store.
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.js'

const appStore = configureStore({
    // reducer is like a template for all slices of states
    reducer:{
        //The 'cart' key will be the name of our state slice.
        cart: cartReducer
    }
})

export default appStore; // We export the store so we can use it in our main application.