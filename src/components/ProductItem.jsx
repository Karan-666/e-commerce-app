import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'
import {Link} from 'react-router-dom';

function ProductItem({product}) {

  // calling useDispatch hook to get the function to change state
  const dispatch = useDispatch()

  // We create a new state to track the current image URL.
  const [currentImage, setCurrentImage] = useState(product.thumbnail);

  const handleAddItem = (e) => {
    // We stop the click event from bubbling up to the parent Link, so it doesn't navigate.
    e.stopPropagation();
    e.preventDefault();
    dispatch(addItem(product));
  };

   // This function runs when the mouse enters the card.
  const handleMouseEnter = () => {
    // We check if there are more images in the 'images' array.
    // setting a random image
    if (product.images && product.images.length > 0) {
      let randomImage = Math.floor(Math.random() * product.images.length);
      setCurrentImage(product.images[randomImage]);
    }
  };

  // This function runs when the mouse leaves the card.
  const handleMouseLeave = () => {
    // We set the current image to the first image in the array.
    setCurrentImage(product.images[0]);
  };

 return (
    // We wrap the entire card in a single div to keep it all together.
     <div
      className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 hover:z-10  bg-gradient-to-br from-slate-850 to-purple-400 border border-slate-700"
      onMouseEnter={handleMouseEnter} // We add the mouse hover event.
      onMouseLeave={handleMouseLeave} // We add the mouse leave event.
    >
      {/* We wrap the image and title in a Link component. The "to" prop uses the product's ID. */}
      <Link to={`/product/${product.id}`}>
        <img
          src={currentImage}
          alt={product.title}
          loading="lazy" // added for lazy loading of image
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