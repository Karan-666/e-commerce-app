import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";

function Header() {
  const cartItem = useSelector((store) => store.cart.items);

  return (
    // This is our main header tag.
   <header className="bg-gray-950 text-white p-4 fixed top-0 left-0 w-full z-50">
      {/* This is a container to keep our content neatly centered on the page. */}
      {/* 'mx-auto' centers the container horizontally. */}
      {/* 'justify-between' puts space between the items (like the title and the navigation). */}
      {/* 'items-center' centers the items vertically. */}
      <div className="container mx-auto flex justify-between items-center">
        {/* This is the main title of our app, "ShoppyGlobe". */}
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          ShoppyGlobe
        </h1>

        {/* This is the navigation section of our header. */}
        <nav>
          {/* This is an unordered list for our navigation links. */}
          {/* 'flex' makes the list items show up in a row instead of on top of each other. */}
          <ul className="flex gap-4">
            {/* ALl the navigation using Link tag */}
            <li>
              <Link to="/" className="hover:text-gray-300">
                <IoMdHome size={24} />
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="hover:text-gray-300 flex items-center"
              >
                <FaShoppingCart size={24} />{" "}
                <span className="ml-2">({cartItem.length})</span>
              </Link>
            </li>
            <li>
              {/* The onClick prop tells the browser to run a function when the Link is clicked. */}
              <Link
                to="#"
                className="hover:text-gray-300"
                onClick={() => alert("Dummy Help button")}
              >
                <IoIosHelpCircle size={24} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
