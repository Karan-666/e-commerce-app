import React from "react";
import UseFetch from "../hooks/useFetch";
import ProductItem from "./ProductItem";
import {Link} from 'react-router-dom';

function ProductList() {
  // destructuring the data from the custom hook.
  // giving data alias as products
  const {
    data: products,
    loading,
    error,
  } = UseFetch("https://dummyjson.com/products");

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
      {/* // creating a grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Looping through each product using map */}
        
        {products.map((item) => (
          <ProductItem product={item} key={item.id} />
        ))}
        
      </div>
    </div>
  );
}

export default ProductList;
