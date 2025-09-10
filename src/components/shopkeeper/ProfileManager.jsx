import { useState } from 'react'
import { 
  Upload, 
  Camera, 
  MapPin, 
  Clock, 
  Phone, 
  Mail,
  Save,
  RotateCcw
} from 'lucide-react'

const ProfileManager = () => {
  const [shopData, setShopData] = useState({
    name: "Royal Fashion Boutique",
    category: "Clothing & Fashion",
    description: "Luxury fashion boutique offering the latest trends in women's and men's fashion. We specialize in premium quality clothing, accessories, and personalized styling services.",
    address: "123 Fashion Street, Brigade Road, Bengaluru, Karnataka 560001",
    phone: "+91 9876543210",
    email: "info@royalfashion.com",
    website: "www.royalfashion.com",
    hours: {
      Monday: { open: "10:00", close: "20:00" },
      Tuesday: { open: "10:00", close: "20:00" },
      Wednesday: { open: "10:00", close: "20:00" },
      Thursday: { open: "10:00", close: "20:00" },
      Friday: { open: "10:00", close: "21:00" },
      Saturday: { open: "10:00", close: "21:00" },
      Sunday: { open: "11:00", close: "19:00" }
    }
  })

  const [shopImages, setShopImages] = useState([
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  ])

  const handleInputChange = (field, value) => {
    setShopData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleHoursChange = (day, field, value) => {
    setShopData(prev => ({
      ...prev,
      hours: {
        ...prev.hours,
        [day]: {
          ...prev.hours[day],
          [field]: value
        }
      }
    }))
  }

  const handleImageUpload = (event) => {
    const files = event.target.files
    if (files && files[0]) {
      const newImage = URL.createObjectURL(files[0])
      setShopImages(prev => [...prev, newImage])
    }
  }

  const handleSave = () => {
    // Save logic would go here
    console.log('Saving shop data:', shopData)
  }

  return (
    <div className="min-h-screen bg-bg-primary py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gold-primary mb-2">Shop Profile Manager</h1>
            <p className="text-gold-light">Manage your shop details, photos, and business information</p>
          </div>
          <div className="flex space-x-4">
            <button className="btn-secondary flex items-center">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </button>
            <button onClick={handleSave} className="btn-primary flex items-center">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="card mb-6">
              <h2 className="text-xl font-bold text-gold-primary mb-4">Basic Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gold-primary font-medium mb-2">Shop Name</label>
                  <input
                    type="text"
                    value={shopData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full bg-bg-primary/50 border border-gold-primary/30 rounded-lg px-4 py-2 text-gold-light focus:outline-none focus:ring-2 focus:ring-gold-primary"
                  />
                </div>
                <div>
                  <label className="block text-gold-primary font-medium mb-2">Category</label>
                  <select
                    value={shopData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full bg-bg-primary/50 border border-gold-primary/30 rounded-lg px-4 py-2 text-gold-light focus:outline-none focus:ring-2 focus:ring-gold-primary"
                  >
                    <option value="Clothing & Fashion">Clothing & Fashion</option>
                    <option value="Jewelry">Jewelry</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Home Decor">Home Decor</option>
                    <option value="Food & Beverages">Food & Beverages</option>
                    <option value="Sports & Fitness">Sports & Fitness</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gold-primary font-medium mb-2">Description</label>
                  <textarea
                    value={shopData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    className="w-full bg-bg-primary/50 border border-gold-primary/30 rounded-lg px-4 py-2 text-gold-light focus:outline-none focus:ring-2 focus:ring-gold-primary"
                  />
                </div>
              </div>
            </div>

            <div className="card mb-6">
              <h2 className="text-xl font-bold text-gold-primary mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gold-primary font-medium mb-2">Phone Number</label>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gold-primary mr-2" />
                    <input
                      type="tel"
                      value={shopData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="flex-1 bg-bg-primary/50 border border-gold-primary/30 rounded-lg px-4 py-2 text-gold-light focus:outline-none focus:ring-2 focus:ring-gold-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gold-primary font-medium mb-2">Email Address</label>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-gold-primary mr-2" />
                    <input
                      type="email"
                      value={shopData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="flex-1 bg-bg-primary/50 border border-gold-primary/30 rounded-lg px-4 py-2 text-gold-light focus:outline-none focus:ring-2 focus:ring-gold-primary"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gold-primary font-medium mb-2">Address</label>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gold-primary mr-2" />
                    <input
                      type="text"
                      value={shopData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="flex-1 bg-bg-primary/50 border border-gold-primary/30 rounded-lg px-4 py-2 text-gold-light focus:outline-none focus:ring-2 focus:ring-gold-primary"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-bold text-gold-primary mb-4">Opening Hours</h2>
              <div className="space-y-3">
                {Object.entries(shopData.hours).map(([day, hours]) => (
                  <div key={day} className="flex items-center justify-between p-3 bg-bg-primary/50 rounded-lg">
                    <span className="text-gold-primary font-medium w-24">{day}</span>
                    <div className="flex items-center space-x-2">
                      <input
                        type="time"
                        value={hours.open}
                        onChange={(e) => handleHoursChange(day, 'open', e.target.value)}
                        className="bg-bg-primary border border-gold-primary/30 rounded-lg px-3 py-1 text-gold-light"
                      />
                      <span className="text-gold-light">to</span>
                      <input
                        type="time"
                        value={hours.close}
                        onChange={(e) => handleHoursChange(day, 'close', e.target.value)}
                        className="bg-bg-primary border border-gold-primary/30 rounded-lg px-3 py-1 text-gold-light"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <div className="card mb-6">
              <h2 className="text-xl font-bold text-gold-primary mb-4">Shop Images</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {shopImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image}
                        alt={`Shop ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <button className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <label className="block w-full bg-bg-primary/50 border-2 border-dashed border-gold-primary/30 rounded-lg p-6 text-center cursor-pointer hover:border-gold-primary transition-colors">
                  <Upload className="h-8 w-8 text-gold-primary mx-auto mb-2" />
                  <span className="text-gold-primary font-medium">Upload Images</span>
                  <p className="text-gold-light text-sm">PNG, JPG up to 10MB</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-bold text-gold-primary mb-4">AR Store Preview</h2>
              <div className="bg-bg-primary/50 rounded-lg p-4 text-center">
                <Camera className="h-12 w-12 text-gold-primary mx-auto mb-4" />
                <p className="text-gold-light mb-4">Preview how your store will look in AR</p>
                <button className="btn-primary w-full">
                  Generate AR Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileManager