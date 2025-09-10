import { Star, MapPin, Clock, Tag, Heart, Eye } from 'lucide-react'
import { useState } from 'react'

const ShopCard = ({ shop }) => {
  const [isBookmarked, setIsBookmarked] = useState(false)

  // Safely get properties with defaults
  const shopName = shop?.name || 'Unknown Shop'
  const shopImage = shop?.image || 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80'
  const shopDescription = shop?.description || 'No description available'
  const shopRating = shop?.rating || 0
  const shopDistance = shop?.distance || 0
  const shopPriceRange = shop?.priceRange || '₹'
  const shopTags = shop?.tags || []
  const shopCategory = shop?.category || 'General'

  const getPriceRangeText = (range) => {
    const ranges = {
      "₹": "Budget",
      "₹₹": "Moderate",
      "₹₹₹": "Expensive",
      "₹₹₹₹": "Luxury"
    }
    return ranges[range] || range
  }

  return (
    <div className="card group hover:border-gold-primary/50 transition-all duration-300 hover:scale-105">
      {/* Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={shopImage}
          alt={shopName}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <button className="btn-primary text-sm py-1 px-3 flex items-center">
            <Eye className="h-4 w-4 mr-1" />
            Preview
          </button>
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`p-2 rounded-full ${
              isBookmarked 
                ? 'bg-gold-primary text-bg-primary' 
                : 'bg-bg-primary/80 text-gold-primary hover:bg-gold-primary hover:text-bg-primary'
            } transition-colors duration-200`}
          >
            <Heart className="h-4 w-4 fill-current" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gold-primary">{shopName}</h3>
          <div className="flex items-center bg-gold-primary/10 px-2 py-1 rounded">
            <span className="text-gold-primary text-sm font-semibold">{getPriceRangeText(shopPriceRange)}</span>
          </div>
        </div>

        <p className="text-gold-light text-sm mb-4">{shopDescription}</p>

        {/* Rating and Distance */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-gold-primary fill-current" />
              <span className="text-gold-light ml-1 text-sm">{shopRating}</span>
            </div>
            <div className="flex items-center ml-4">
              <MapPin className="h-4 w-4 text-gold-primary" />
              <span className="text-gold-light ml-1 text-sm">{shopDistance} km</span>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gold-primary" />
            <span className="text-gold-light ml-1 text-sm">Open</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {shopTags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gold-primary/10 text-gold-primary text-xs rounded-full flex items-center"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button className="btn-primary flex-1 text-sm py-2">
            View Shop
          </button>
          <button className="btn-secondary text-sm py-2 px-3">
            <MapPin className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShopCard