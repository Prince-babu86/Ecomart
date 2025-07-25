import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CleanEmptyCart = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md text-center p-10 border border-gray-200 rounded-3xl shadow-sm">
        
        <div className="mb-6 flex justify-center">
          <div className="p-4 rounded-full bg-gray-100 border border-gray-300">
            <ShoppingCart className="w-8 h-8 text-gray-800" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Your Cart is Empty
        </h2>

        <p className="text-gray-500 mb-6">
          You haven’t added anything yet. Discover premium toys and fill your cart with joy.
        </p>

        <Link to={`/products`} className="bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-full transition duration-300">
          🛍️ Shop Now
        </Link>
      </div>
    </div>
  );
};

export default CleanEmptyCart;
