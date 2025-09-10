import React, { useState, useRef } from 'react';

const ARView = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentView, setCurrentView] = useState('entrance');
  const arContainerRef = useRef(null);

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      arContainerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Simulated AR hotspots - these would be products in a real implementation
  const hotspots = [
    { id: 1, name: 'Summer Collection', position: 'left-1/4 top-1/3' },
    { id: 2, name: 'New Arrivals', position: 'right-1/4 top-1/2' },
    { id: 3, name: 'Special Offers', position: 'left-1/3 bottom-1/4' },
  ];

  const views = [
    { id: 'entrance', name: 'Store Entrance' },
    { id: 'main', name: 'Main Area' },
    { id: 'checkout', name: 'Checkout Counter' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gold-primary">Immersive Store Tour</h1>
          <button
            onClick={handleFullscreen}
            className="bg-gold-primary text-gray-900 py-2 px-4 rounded-md font-semibold hover:bg-gold-light flex items-center"
          >
            <span className="mr-2">{isFullscreen ? 'Exit' : 'Enter'} Fullscreen</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 9a1 1 0 012 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="flex space-x-4 mb-6">
          {views.map(view => (
            <button
              key={view.id}
              onClick={() => setCurrentView(view.id)}
              className={`px-4 py-2 rounded-md ${
                currentView === view.id 
                  ? 'bg-gold-primary text-gray-900' 
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              {view.name}
            </button>
          ))}
        </div>

        <div 
          ref={arContainerRef}
          className="relative bg-black rounded-lg overflow-hidden h-96 md:h-[600px]"
        >
          {/* This would be the actual AR/3D view in a real implementation */}
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gold-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h2 className="text-2xl font-bold text-white mb-2">Immersive Store Experience</h2>
              <p className="text-gray-400">In a full implementation, this would be a 360° view of your store</p>
              <p className="text-gray-400 mt-2">Powered by WebXR and AI-stitched photography</p>
            </div>
          </div>

          {/* Hotspots */}
          {hotspots.map(hotspot => (
            <div 
              key={hotspot.id}
              className={`absolute ${hotspot.position} transform -translate-x-1/2 -translate-y-1/2`}
            >
              <div className="relative group">
                <div className="w-6 h-6 bg-gold-primary rounded-full flex items-center justify-center cursor-pointer animate-pulse">
                  <span className="text-xs font-bold text-gray-900">+</span>
                </div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-48 p-2 bg-gray-800 rounded-md shadow-lg">
                  <p className="text-white text-sm font-medium">{hotspot.name}</p>
                  <button className="mt-2 w-full bg-gold-primary text-gray-900 py-1 px-2 rounded text-xs font-semibold hover:bg-gold-light">
                    View Products
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gold-primary mb-2">Navigation Tips</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Click and drag to look around</li>
              <li>• Use arrow keys to move between areas</li>
              <li>• Click on hotspots to explore products</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gold-primary mb-2">Store Information</h3>
            <p className="text-gray-300 text-sm">Current view: {views.find(v => v.id === currentView)?.name}</p>
            <p className="text-gray-300 text-sm">Products spotted: {hotspots.length}</p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gold-primary mb-2">Actions</h3>
            <div className="space-y-2">
              <button className="w-full bg-teal text-white py-2 px-4 rounded text-sm font-semibold hover:bg-teal-dark">
                View Catalog
              </button>
              <button className="w-full bg-gold-primary text-gray-900 py-2 px-4 rounded text-sm font-semibold hover:bg-gold-light">
                Bookmark Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARView;