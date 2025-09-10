import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isBookmarked, setIsBookmarked] = useState(product.isBookmarked || false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBookmarkToggle = () => {
    setIsBookmarked(!isBookmarked);
    // In a real app, this would update the backend
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative">
        <img 
          src={product.images[currentImageIndex]} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        
        {product.images.length > 1 && (
          <>
            <button 
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button 
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </>
        )}
        
        <div className="absolute top-2 right-2">
          <button 
            onClick={handleBookmarkToggle}
            className="bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 ${isBookmarked ? 'text-gold-primary fill-current' : 'text-white'}`} 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
              <path d="M9 11H5v6a2 2 0 002 2h6a2 2 0 002-2v-6h-4z" />
            </svg>
          </button>
        </div>
        
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-teal text-white text-xs font-semibold px-2 py-1 rounded">
            NEW
          </div>
        )}
        
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}
      </div>
      
      {/* Product Details */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-white font-semibold text-lg truncate">{product.name}</h3>
          <span className="text-gold-primary font-bold">₹{product.price}</span>
        </div>
        
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex text-gold-primary">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 ${i < product.rating ? 'fill-current' : 'text-gray-600'}`} 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-400 text-sm ml-2">({product.reviewCount})</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags.map(tag => (
            <span key={tag} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-2">
          <button className="flex-1 bg-gold-primary text-gray-900 py-2 px-4 rounded font-semibold hover:bg-gold-light transition-colors">
            View Details
          </button>
          <button className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Default props for the product
ProductCard.defaultProps = {
  product: {
    id: 1,
    name: "Premium Leather Handbag",
    description: "Handcrafted genuine leather handbag with multiple compartments and elegant finish.",
    price: 3499,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],
    rating: 4.5,
    reviewCount: 128,
    tags: ["Fashion", "Leather", "Women"],
    isNew: true,
    discount: 15,
    isBookmarked: false
  }
};

export default ProductCard;