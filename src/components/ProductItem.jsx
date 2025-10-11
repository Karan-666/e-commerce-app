import React from 'react'

function ProductItem({product}) {
  return (
    // this is a card for single object
    // adding key for each product card
     <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
      {/* Image to display product's image   */}
      <img
      src={product.thumbnail}
      alt={product.title}
      className="w-full h-48 object-cover rounded-md mb-4"
      />
      {/* Displaying product information */}
       <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-4">${product.price}</p>
      {/* Add to cart button */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  )
}

export default ProductItem
