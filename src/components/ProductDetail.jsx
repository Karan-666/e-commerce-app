import React from 'react'
import {useParams} from 'react-router-dom';
import useFetch from '../hooks/useFetch.js' 

function ProductDetail() {

  const {id} = useParams();

 // We use our custom hook to fetch a single product by its ID.
  const { data: product, loading, error } = useFetch(`https://dummyjson.com/products/${id}`);

  console.log(product,"productt");

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    // This is part of the error handling requirement.
    return <div className="text-center mt-8 text-red-500">Error: {error}</div>;
  }

  // We need to check if the product data exists before trying to display it.
  if (!product) {
    return <div className="text-center mt-8">Product not found.</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* We display the main product image. */}
        <img
          src={product.images[0]}
          alt={product.title}
          loading="lazy"
          className="md:w-1/2 w-full h-auto object-cover"
        />
        {/* This div will hold all the product's text details. */}
        <div className="p-6 md:p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl text-blue-600 font-semibold mb-2">${product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-gray-500 text-sm">Category: {product.category}</p>
          <p className="text-gray-500 text-sm">Brand: {product.brand}</p>
          
          {/* This button will be functional later with Redux. */}
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mt-6 self-start">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};


export default ProductDetail
