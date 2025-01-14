import React, { useState } from 'react';
import { Star, X, Package, User, Truck, ClipboardList } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';

const MarketPlace = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Organic Coffee Beans",
      image: "/api/placeholder/300/200",
      price: 299.99,
      rating: 4.5,
      inStock: true,
      stockCount: 150,
      owner: "Green Valley Farms",
      location: "Colombia",
      description: "Premium grade Arabica coffee beans grown at high altitude",
      productionProcedure: [
        "Shade-grown at 1,800 meters altitude",
        "Hand-picked and sorted",
        "Natural processing method",
        "Sun-dried for 15 days",
        "Roasted in small batches"
      ],
      certifications: ["Organic", "Fair Trade", "Rainforest Alliance"],
      harvestDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Premium Rice Seeds",
      image: "/api/placeholder/300/200",
      price: 89.99,
      rating: 4.8,
      inStock: true,
      stockCount: 500,
      owner: "Asian Agri Solutions",
      location: "Thailand",
      description: "High-yield jasmine rice seeds for commercial farming",
      productionProcedure: [
        "Carefully selected parent plants",
        "Controlled growing environment",
        "Triple cleaning process",
        "Humidity controlled storage",
        "Quality tested for germination"
      ],
      certifications: ["Non-GMO", "Quality Assured"],
      harvestDate: "2024-02-20"
    },
    {
      id: 3,
      name: "Organic Fertilizer",
      image: "/api/placeholder/300/200",
      price: 49.99,
      rating: 4.2,
      inStock: false,
      stockCount: 0,
      owner: "EcoGrow Industries",
      location: "USA",
      description: "100% organic compound fertilizer for all crops",
      productionProcedure: [
        "Composting of organic materials",
        "Natural fermentation process",
        "Mineral enrichment",
        "Temperature controlled aging",
        "Quality testing for nutrient content"
      ],
      certifications: ["USDA Organic", "OMRI Listed"],
      harvestDate: "2024-03-01"
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < Math.floor(rating)
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">{rating}</span>
      </div>
    );
  };

  const Badge = ({ children, variant = "primary" }) => {
    const baseClasses = "px-2 py-1 rounded-full text-sm font-medium";
    const variants = {
      primary: "bg-green-100 text-green-800",
      secondary: "bg-gray-100 text-gray-800",
      danger: "bg-red-100 text-red-800"
    };
    
    return (
      <span className={`${baseClasses} ${variants[variant]}`}>
        {children}
      </span>
    );
  };

  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div 
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={onClose}
        />
        <div className="bg-white rounded-lg p-6 max-w-3xl w-full mx-4 relative z-10 max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Include Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Agricultural Products</h1>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => {
                setSelectedProduct(product);
                setIsModalOpen(true);
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <StarRating rating={product.rating} />
                <div className="flex justify-between items-center mt-3">
                  <span className="text-2xl font-bold text-green-600">
                    ${product.price}
                  </span>
                  <Badge variant={product.inStock ? "primary" : "danger"}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Detail Modal */}
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProduct(null);
          }}
        >
          {selectedProduct && (
            <div>
              <h2 className="text-2xl font-bold mb-6">{selectedProduct.name}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-600">Owner: {selectedProduct.owner}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-600">Location: {selectedProduct.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-600">
                        Stock: {selectedProduct.stockCount} units
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <ClipboardList className="w-5 h-5" />
                    Production Procedure
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 mb-4">
                    {selectedProduct.productionProcedure.map((step, index) => (
                      <li key={index} className="text-gray-600">{step}</li>
                    ))}
                  </ol>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Certifications</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.certifications.map((cert, index) => (
                          <Badge key={index} variant="secondary">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Harvest Date</h4>
                      <p className="text-gray-600">
                        {new Date(selectedProduct.harvestDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-6">
                <div>
                  <p className="text-3xl font-bold text-green-600">
                    ${selectedProduct.price}
                  </p>
                  <StarRating rating={selectedProduct.rating} />
                </div>
                <button 
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    selectedProduct.inStock 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!selectedProduct.inStock}
                >
                  {selectedProduct.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default MarketPlace;
