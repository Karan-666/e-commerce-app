import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
   return (
    <div className="text-center p-10">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Page Not Found</p>
      <p className="text-gray-500 mb-8">The page you are looking for does not exist or has been moved.</p>
      {/* We add a link back to the home page for a better user experience. */}
      <Link to="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;