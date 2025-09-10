import React, { useState } from 'react';
import ProductCard from './ProductCard';

const Bookmarks = () => {
  const [activeTab, setActiveTab] = useState('shops');
  
  // Sample bookmarked shops data
  const bookmarkedShops = [
    {
      id: 1,
      name: 'Fashion Haven',
      image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      rating: 4.7,
      reviewCount: 245,
      category: 'Fashion',
      distance: '1.2 km',
      isOpen: true
    },
    {
      id: 2,
      name: 'Tech Gadgets',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      rating: 4.3,
      reviewCount: 178,
      category: 'Electronics',
      distance: '2.5 km',
      isOpen: true
    },
    {
      id: 3,
      name: 'Home Decor Plus',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      rating: 4.8,
      reviewCount: 312,
      category: 'Home & Living',
      distance: '3.1 km',
      isOpen: false
    }
  ];
  
  // Sample bookmarked products data
  const bookmarkedProducts = [
    {
      id: 1,
      name: "Premium Leather Handbag",
      description: "Handcrafted genuine leather handbag with multiple compartments and elegant finish.",
      price: 3499,
      images: [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ],
      rating: 4.5,
      reviewCount: 128,
      tags: ["Fashion", "Leather", "Women"],
      isNew: true,
      discount: 15,
      isBookmarked: true
    },
    {
      id: 2,
      name: "Wireless Bluetooth Earbuds",
      description: "High-quality sound with noise cancellation and 24hr battery life.",
      price: 2499,
      images: [
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ],
      rating: 4.2,
      reviewCount: 89,
      tags: ["Electronics", "Audio"],
      isNew: false,
      discount: 20,
      isBookmarked: true
    },
    {
      id: 3,
      name: "Ceramic Coffee Mug Set",
      description: "Set of 4 beautiful ceramic mugs, dishwasher and microwave safe.",
      price: 899,
      images: [
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ],
      rating: 4.8,
      reviewCount: 204,
      tags: ["Home", "Kitchen"],
      isNew: true,
      discount: 10,
      isBookmarked: true
    }
  ];

  const removeBookmark = (id, type) => {
    alert(`${type.slice(0, -1)} removed from bookmarks!`);
    // In a real app, this would update the state and backend
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gold-primary mb-8">My Bookmarks</h1>
        
        {/* Tabs */}
        <div className="border-b border-gray-700 mb-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('shops')}
              className={`py-2 px-1 text-lg font-medium border-b-2 ${
                activeTab === 'shops'
                  ? 'border-gold-primary text-gold-primary'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              Shops ({bookmarkedShops.length})
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`py-2 px-1 text-lg font-medium border-b-2 ${
                activeTab === 'products'
                  ? 'border-gold-primary text-gold-primary'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              Products ({bookmarkedProducts.length})
            </button>
          </div>
        </div>
        
        {/* Content based on active tab */}
        {activeTab === 'shops' ? (
          <div>
            {bookmarkedShops.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bookmarkedShops.map(shop => (
                  <div key={shop.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img 
                        src={shop.image} 
                        alt={shop.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <button 
                          onClick={() => removeBookmark(shop.id, 'shops')}
                          className="bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-colors"
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 text-gold-primary fill-current" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                            <path d="M9 11H5v6a2 2 0 002 2h6a2 2 0 002-2v-6h-4z" />
                          </svg>
                        </button>
                      </div>
                      <div className="absolute top-2 left-2">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          shop.isOpen ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                        }`}>
                          {shop.isOpen ? 'OPEN' : 'CLOSED'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-white font-semibold text-lg">{shop.name}</h3>
                        <div className="flex items-center">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4 text-gold-primary fill-current" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-white ml-1">{shop.rating}</span>
                          <span className="text-gray-400 text-sm ml-1">({shop.reviewCount})</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-400">{shop.category}</span>
                        <span className="text-gray-400">{shop.distance}</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gold-primary text-gray-900 py-2 px-4 rounded font-semibold hover:bg-gold-light transition-colors">
                          Visit Store
                        </button>
                        <button className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 mx-auto text-gray-500 mb-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <h3 className="text-xl font-medium text-gray-400 mb-2">No bookmarked shops yet</h3>
                <p className="text-gray-500">Start exploring shops and save your favorites for later!</p>
                <button className="mt-4 bg-gold-primary text-gray-900 py-2 px-6 rounded-md font-semibold hover:bg-gold-light">
                  Discover Shops
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            {bookmarkedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bookmarkedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 mx-auto text-gray-500 mb-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <h3 className="text-xl font-medium text-gray-400 mb-2">No bookmarked products yet</h3>
                <p className="text-gray-500">Start exploring products and save your favorites for later!</p>
                <button className="mt-4 bg-gold-primary text-gray-900 py-2 px-6 rounded-md font-semibold hover:bg-gold-light">
                  Discover Products
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;