import { useState } from 'react'
import { Search, Filter, MapPin, Star, Clock, Tag } from 'lucide-react'
import ShopCard from '../common/ShopCard'

const ShopDiscovery = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [distance, setDistance] = useState(5)

  // Mock data for demonstration - ensure all required properties exist
  const shops = [
    {
      id: 1,
      name: "Royal Fashion Boutique",
      category: "Clothing",
      rating: 4.7,
      distance: 1.2,
      priceRange: "₹₹",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
      description: "Luxury fashion boutique with the latest trends",
      tags: ["Fashion", "Luxury", "Trendy"],
      isOpen: true
    },
    {
      id: 2,
      name: "Sparkle Jewelers",
      category: "Jewelry",
      rating: 4.9,
      distance: 2.5,
      priceRange: "₹₹₹",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "Exquisite jewelry collections for every occasion",
      tags: ["Jewelry", "Luxury", "Gold"],
      isOpen: true
    },
    {
      id: 3,
      name: "Tech Haven Electronics",
      category: "Electronics",
      rating: 4.5,
      distance: 3.8,
      priceRange: "₹₹₹₹",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "Latest gadgets and electronics at best prices",
      tags: ["Electronics", "Gadgets", "Tech"],
      isOpen: true
    },
    {
      id: 4,
      name: "Home Decor Paradise",
      category: "Home Decor",
      rating: 4.6,
      distance: 0.8,
      priceRange: "₹₹",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1558&q=80",
      description: "Beautiful home decor items for every style",
      tags: ["Home", "Decor", "Furniture"],
      isOpen: true
    },
    {
      id: 5,
      name: "Gourmet Delights",
      category: "Food & Beverages",
      rating: 4.8,
      distance: 1.7,
      priceRange: "₹₹₹",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "Premium gourmet foods and specialty ingredients",
      tags: ["Food", "Gourmet", "Specialty"],
      isOpen: true
    },
    {
      id: 6,
      name: "Fitness Gear Pro",
      category: "Sports & Fitness",
      rating: 4.4,
      distance: 4.2,
      priceRange: "₹₹₹",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "Professional fitness equipment and accessories",
      tags: ["Fitness", "Sports", "Equipment"],
      isOpen: true
    }
  ]

  const categories = ["All", "Clothing", "Jewelry", "Electronics", "Home Decor", "Food & Beverages", "Sports & Fitness"]

  return (
    <div className="min-h-screen bg-bg-primary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gold-primary mb-4">Discover Local Shops</h1>
          <p className="text-gold-light text-lg">Explore unique stores in your area with immersive 3D previews</p>
        </div>

        {/* Search and Filters */}
        <div className="card mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-primary h-5 w-5" />
              <input
                type="text"
                placeholder="Search for shops, products, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-bg-primary/50 border border-gold-primary/30 rounded-lg text-gold-light placeholder-gold-primary/60 focus:outline-none focus:ring-2 focus:ring-gold-primary focus:border-transparent"
              />
            </div>
            <button className="btn-secondary flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>

          {/* Quick Filters */}
          <div className="mt-6">
            <h3 className="text-gold-primary font-semibold mb-3">Quick Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.toLowerCase() 
                      ? 'bg-gold-primary text-bg-primary' 
                      : 'bg-bg-primary/50 text-gold-light border border-gold-primary/30 hover:bg-gold-primary/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Shop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shops.map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>

        {/* Map View Toggle */}
        <div className="fixed bottom-8 right-8">
          <button className="btn-primary flex items-center shadow-lg">
            <MapPin className="h-5 w-5 mr-2" />
            Map View
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShopDiscovery