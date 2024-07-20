import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => window.location.href = '/'}
        className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
      >
        Go Home
      </button>
    </div>
  );
};

export default Page;
