import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

function Ecommerce() {
  const [products] = useState([
    { 
      id: 1, 
      name: 'Organic Apples', 
      price: 4.99, 
      image: '/src/assets/images/apple.jpeg', 
      category: 'Fruit', 
      rating: 4, 
      ratingCount: 120 
    },
    { 
      id: 2, 
      name: 'Organic Carrots', 
      price: 3.49, 
      image: 'src/assets/images/carrot.jpeg', 
      category: 'Vegetable', 
      rating: 5, 
      ratingCount: 200 
    },
    { 
      id: 3, 
      name: 'Organic Tomatoes', 
      price: 2.99, 
      image: 'src/assets/images/tomato.jpeg', 
      category: 'Vegetable', 
      rating: 3, 
      ratingCount: 80 
    },
    // Add more products here
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-6">Agricultural Marketplace</h1>
      
      {/* Search Bar */}
      <div className="my-4 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search products..."
          className="border p-2 rounded w-1/2 md:w-1/3 lg:w-1/4"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Ecommerce;