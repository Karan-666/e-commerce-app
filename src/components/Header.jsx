import React from "react";
import {Link} from 'react-router-dom';

function Header() {
  return (
    // This is our main header tag.
    <header className="bg-gray-800 text-white p-4">
      {/* This is a container to keep our content neatly centered on the page. */}
      {/* 'mx-auto' centers the container horizontally. */}
      {/* 'justify-between' puts space between the items (like the title and the navigation). */}
      {/* 'items-center' centers the items vertically. */}
      <div className="container mx-auto flex justify-between items-center">
        {/* This is the main title of our app, "ShoppyGlobe". */}
        <h1 className="text-2xl font-bold">ShoppyGlobe</h1>

        {/* This is the navigation section of our header. */}
        <nav>
          {/* This is an unordered list for our navigation links. */}
          {/* 'flex' makes the list items show up in a row instead of on top of each other. */}
          <ul className="flex gap-4">
            {/* ALl the navigation using Link tag */}
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-gray-300">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/checkout" className="hover:text-gray-300">
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
