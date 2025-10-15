import React from 'react'
import { Link , useRouteError  } from 'react-router-dom';

function NotFound() {
  // We use the useRouteError hook to get the error details.
  const error = useRouteError();
  console.error(error); // It's good practice to also log the error to the console.

  return (
    <div className="text-center p-10">
      <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-xl text-gray-700 mb-2">Something went wrong.</p>
      {/* Display the error status and text here for more detail. */}
       {/* We only show the error details if the error object actually exists. */}
      {error && (
        <p className="text-red-500 font-semibold mb-4">
          {error.status}: {error.statusText}
        </p>
      )}
      <p className="text-gray-500 mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;