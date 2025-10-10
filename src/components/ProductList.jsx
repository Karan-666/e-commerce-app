import React from "react";
import UseFetch from "../hooks/useFetch";

function ProductList() {
  // destructuring the data from the custom hook.
  // giving data alias as products
  const { data : products, loading, error } = UseFetch("https://dummyjson.com/products");

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
      {products.map( (item) => (
        // Providing a unique key for each item in list
        <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
          <img
            src={item.images[0]}
            alt={item.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          {/* Displaying product title and price */}
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <p className="text-gray-600 mb-4">${item.price}</p>
          {/* Add to cart button */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
        </div>
        ))}
    </div>
    </div>
  );
}

export default ProductList;
