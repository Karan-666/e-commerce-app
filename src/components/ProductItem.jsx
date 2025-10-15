import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'
import {Link} from 'react-router-dom';

function ProductItem({product}) {

  // calling useDispatch hook to get the function to change state
  const dispatch = useDispatch()

  const handleAddItem = (e) => {
    // We stop the click event from bubbling up to the parent Link, so it doesn't navigate.
    e.stopPropagation();
    e.preventDefault();
    dispatch(addItem(product));
  };

 return (
    // We wrap the entire card in a single div to keep it all together.
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* We wrap the image and title in a Link component. The "to" prop uses the product's ID. */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      </Link>
      
      {/* This is the price, which is not part of the link. */}
      <p className="text-gray-600 mb-4">${product.price}</p>

      {/* The "Add to Cart" button is outside the Link so it doesn't navigate. */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
        onClick={handleAddItem}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;