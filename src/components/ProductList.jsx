import React, { useState } from "react";
import UseFetch from "../hooks/useFetch";
import ProductItem from "./ProductItem";
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../utils/cartSlice";

function ProductList() {

// // state variable for search
//  const [searchQuery, setSearchQuery] = useState('');

  // destructuring the data from the custom hook.
  // giving data alias as products
  const {
    data: products,
    loading,
    error,
  } = UseFetch("https://dummyjson.com/products");

    // getting search text using useSelector
  const searchQuery = useSelector(store => store.cart.searchQuery);
  const dispatch = useDispatch();

  // check loading status and showing loading
  if (loading) {
    return <div className="text-center mt-8">Loading.....</div>;
  }

  // checking error status and showing error
  if (error) {
    return <div className="text-center mt-8 text-red-500">Error: {error}</div>;
  }

  // We will check if the products array is empty.
  if (!products || products.length === 0) {
    return <div className="text-center mt-8">No products found.</div>;
  }

  // no need to create a function, as component re-render on every search
  const filteredProduct = products.filter(
    (item) => {
      const titleMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      const descMatch = item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return titleMatch || descMatch;
    }
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-purple-600">Shop Smart
        <p className="text-lg">Curated essentials for everyday life</p>
      </h1>
      
      {/* Search bar */}
         <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
      </div>
      {/* // creating a grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Looping through each product using map */}
        
        {filteredProduct.map((item) => (
          <ProductItem product={item} key={item.id} />
        ))}
        
      </div>
    </div>
  );
}

export default ProductList;
