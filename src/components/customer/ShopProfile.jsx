import { useState } from 'react'
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Star, 
  Heart, 
  Share2, 
  Navigation, 
  Camera,
  MessageCircle
} from 'lucide-react'
import ReviewComponent from '../common/ReviewComponent'

const ShopProfile = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [isBookmarked, setIsBookmarked] = useState(false)

  // Mock shop data
  const shop = {
    id: 1,
    name: "Royal Fashion Boutique",
    category: "Clothing & Fashion",
    rating: 4.7,
    reviews: 128,
    distance: 1.2,
    priceRange: "₹₹ (Moderate)",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    description: "Luxury fashion boutique offering the latest trends in women's and men's fashion. We specialize in premium quality clothing, accessories, and personalized styling services.",
    address: "123 Fashion Street, Brigade Road, Bengaluru, Karnataka 560001",
    hours: {
      Monday: "10:00 AM - 8:00 PM",
      Tuesday: "10:00 AM - 8:00 PM",
      Wednesday: "10:00 AM - 8:00 PM",
      Thursday: "10:00 AM - 8:00 PM",
      Friday: "10:00 AM - 9:00 PM",
      Saturday: "10:00 AM - 9:00 PM",
      Sunday: "11:00 AM - 7:00 PM"
    },
    contact: {
      phone: "+91 9876543210",
      email: "info@royalfashion.com"
    },
    tags: ["Fashion", "Luxury", "Trendy", "Premium", "Stylish"],
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ]
  }

  // Mock products
  const products = [
    {
      id: 1,
      name: "Designer Silk Saree",
      price: "₹5,999",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      category: "Traditional Wear"
    },
    {
      id: 2,
      name: "Premium Leather Handbag",
      price: "₹8,499",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
      category: "Accessories"
    },
    {
      id: 3,
      name: "Men's Formal Suit",
      price: "₹12,999",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80",
      category: "Formal Wear"
    }
  ]

  // Mock reviews
  const reviews = [
    {
      id: 1,
      user: "Priya Sharma",
      rating: 5,
      comment: "Absolutely loved the collection! The staff was very helpful and the quality is exceptional.",
      date: "2 weeks ago",
      sentiment: "positive"
    },
    {
      id: 2,
      user: "Rahul Kapoor",
      rating: 4,
      comment: "Good variety but a bit pricey. The AR preview feature helped me decide what to buy before visiting.",
      date: "1 month ago",
      sentiment: "neutral"
    }
  ]

  return (
    <div className="min-h-screen bg-bg-primary py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Shop Header */}
        <div className="card mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <img
                src={shop.image}
                alt={shop.name}
                className="w-full md:w-80 h-60 object-cover rounded-lg"
              />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gold-primary mb-2">{shop.name}</h1>
                  <p className="text-gold-light">{shop.category}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`p-2 rounded-full ${
                      isBookmarked 
                        ? 'bg-gold-primary text-bg-primary' 
                        : 'bg-bg-primary/50 text-gold-primary hover:bg-gold-primary hover:text-bg-primary'
                    } transition-colors duration-200`}
                  >
                    <Heart className="h-5 w-5 fill-current" />
                  </button>
                  <button className="p-2 rounded-full bg-bg-primary/50 text-gold-primary hover:bg-gold-primary hover:text-bg-primary transition-colors duration-200">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(shop.rating)
                          ? 'text-gold-primary fill-current'
                          : 'text-gold-primary/30'
                      }`}
                    />
                  ))}
                  <span className="text-gold-light ml-2">
                    {shop.rating} ({shop.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gold-primary mr-1" />
                  <span className="text-gold-light">{shop.distance} km away</span>
                </div>
              </div>

              <p className="text-gold-light mb-6">{shop.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {shop.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gold-primary/10 text-gold-primary text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="btn-primary flex items-center">
                  <Camera className="h-5 w-5 mr-2" />
                  AR Store Tour
                </button>
                <button className="btn-secondary flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat with AI
                </button>
                <button className="btn-secondary flex items-center">
                  <Navigation className="h-5 w-5 mr-2" />
                  Directions
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gold-primary/20 mb-8">
          <nav className="flex space-x-8">
            {['overview', 'catalog', 'reviews', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-gold-primary text-gold-primary'
                    : 'border-transparent text-gold-light hover:text-gold-primary hover:border-gold-primary/30'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="card mb-6">
                <h2 className="text-2xl font-bold text-gold-primary mb-4">Shop Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {shop.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Shop gallery ${index + 1}`}
                      className="w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  ))}
                </div>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-gold-primary mb-4">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex gap-4 p-4 bg-bg-primary/50 rounded-lg hover:bg-gold-primary/5 transition-colors">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-semibold text-gold-primary">{product.name}</h3>
                        <p className="text-gold-light text-sm mb-2">{product.category}</p>
                        <p className="text-gold-primary font-bold">{product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="card mb-6">
                <h2 className="text-2xl font-bold text-gold-primary mb-4">Store Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-gold-primary font-semibold mb-2">Address</h3>
                    <p className="text-gold-light">{shop.address}</p>
                  </div>
                  <div>
                    <h3 className="text-gold-primary font-semibold mb-2">Opening Hours</h3>
                    {Object.entries(shop.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between text-gold-light">
                        <span>{day}</span>
                        <span>{hours}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-gold-primary font-semibold mb-2">Contact</h3>
                    <div className="flex items-center text-gold-light mb-2">
                      <Phone className="h-4 w-4 mr-2" />
                      {shop.contact.phone}
                    </div>
                    <div className="flex items-center text-gold-light">
                      <Mail className="h-4 w-4 mr-2" />
                      {shop.contact.email}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-gold-primary mb-4">Recent Reviews</h2>
                <div className="space-y-4">
                  {reviews.slice(0, 2).map((review) => (
                    <ReviewComponent key={review.id} review={review} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'catalog' && (
          <div className="card">
            <h2 className="text-2xl font-bold text-gold-primary mb-6">Product Catalog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-bg-primary/50 rounded-lg p-4 hover:bg-gold-primary/5 transition-colors">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-gold-primary mb-2">{product.name}</h3>
                  <p className="text-gold-light text-sm mb-2">{product.category}</p>
                  <p className="text-gold-primary font-bold mb-4">{product.price}</p>
                  <button className="btn-primary w-full text-sm py-2">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="card">
            <h2 className="text-2xl font-bold text-gold-primary mb-6">Customer Reviews</h2>
            <div className="space-y-6">
              {reviews.map((review) => (
                <ReviewComponent key={review.id} review={review} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card">
              <h2 className="text-2xl font-bold text-gold-primary mb-4">Get Directions</h2>
              {/* Map placeholder */}
              <div className="bg-bg-primary/50 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gold-primary mx-auto mb-4" />
                  <p className="text-gold-light">Interactive map would be displayed here</p>
                </div>
              </div>
            </div>
            <div className="card">
              <h2 className="text-2xl font-bold text-gold-primary mb-4">Contact Shop</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-gold-primary font-semibold mb-2">Phone</h3>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gold-primary mr-2" />
                    <span className="text-gold-light">{shop.contact.phone}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-gold-primary font-semibold mb-2">Email</h3>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gold-primary mr-2" />
                    <span className="text-gold-light">{shop.contact.email}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-gold-primary font-semibold mb-2">Address</h3>
                  <p className="text-gold-light">{shop.address}</p>
                </div>
                <button className="btn-primary w-full mt-4">
                  Start Chat with Shop
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ShopProfile