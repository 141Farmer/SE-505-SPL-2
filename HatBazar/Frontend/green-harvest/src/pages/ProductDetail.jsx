import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails({ products }) {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-96 object-cover rounded-md"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-green-800">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.category}</p>
          <div className="flex items-center justify-center md:justify-start mt-2">
            <span className="text-yellow-400">{'★'.repeat(product.rating)}</span>
            <span className="text-gray-500 ml-2">({product.ratingCount} reviews)</span>
          </div>
          <p className="text-green-700 font-bold text-xl mt-4">${product.price}</p>
          <p className="text-gray-700 mt-4">{product.description}</p>
          <button className="bg-green-700 text-white px-6 py-3 mt-6 rounded hover:bg-green-600 transition-all duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
