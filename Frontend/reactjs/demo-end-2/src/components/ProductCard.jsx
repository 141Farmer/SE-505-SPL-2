import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-all duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-2xl font-semibold text-green-800">{product.name}</h2>
      <p className="text-gray-600 mt-1">{product.category}</p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-400">{'★'.repeat(product.rating)}</span>
        <span className="text-gray-500 ml-2">({product.ratingCount} reviews)</span>
      </div>
      <p className="text-green-700 font-bold mt-2">${product.price}</p>
      <button className="bg-green-700 text-white px-6 py-3 mt-4 rounded hover:bg-green-600 transition-all duration-300">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;