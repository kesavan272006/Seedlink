import { useState } from 'react'
import { 
  Plus, 
  Search, 
  Filter, 
  Upload, 
  Download,
  Edit,
  Trash2,
  Image
} from 'lucide-react'

const CatalogManager = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Designer Silk Saree",
      price: 5999,
      category: "Traditional Wear",
      stock: 15,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      description: "Handcrafted silk saree with intricate embroidery",
      tags: ["Silk", "Traditional", "Embroidered"]
    },
    {
      id: 2,
      name: "Premium Leather Handbag",
      price: 8499,
      category: "Accessories",
      stock: 8,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
      description: "Genuine leather handbag with multiple compartments",
      tags: ["Leather", "Luxury", "Handmade"]
    },
    {
      id: 3,
      name: "Men's Formal Suit",
      price: 12999,
      category: "Formal Wear",
      stock: 5,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80",
      description: "Premium quality formal suit for men",
      tags: ["Formal", "Premium", "Tailored"]
    }
  ])

  const categories = ["All", "Traditional Wear", "Accessories", "Formal Wear", "Casual Wear", "Footwear"]

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id))
  }

  return (
    <div className="min-h-screen bg-bg-primary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gold-primary mb-2">Product Catalog</h1>
            <p className="text-gold-light">Manage your products, inventory, and pricing</p>
          </div>
          <div className="flex space-x-4">
            <button className="btn-secondary flex items-center">
              <Upload className="h-4 w-4 mr-2" />
              Bulk Upload
            </button>
            <button className="btn-primary flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="card mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-primary h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-bg-primary/50 border border-gold-primary/30 rounded-lg text-gold-light placeholder-gold-primary/60 focus:outline-none focus:ring-2 focus:ring-gold-primary focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-bg-primary/50 border border-gold-primary/30 rounded-lg px-4 py-2 text-gold-light focus:outline-none focus:ring-2 focus:ring-gold-primary"
            >
              {categories.map(category => (
                <option key={category} value={category.toLowerCase()}>{category}</option>
              ))}
            </select>
            <button className="btn-secondary flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
            <div key={product.id} className="card group hover:border-gold-primary/50 transition-all duration-300">
              <div className="relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button className="p-1 bg-gold-primary/80 text-bg-primary rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleDeleteProduct(product.id)}
                    className="p-1 bg-red-500/80 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="absolute bottom-2 left-2 bg-gold-primary/90 text-bg-primary px-2 py-1 rounded text-sm">
                  ₹{product.price.toLocaleString()}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gold-primary mb-2">{product.name}</h3>
                <p className="text-gold-light text-sm mb-3">{product.description}</p>
                
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gold-primary text-sm font-medium">{product.category}</span>
                  <span className={`text-sm ${
                    product.stock > 10 ? 'text-green-400' : 
                    product.stock > 0 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {product.stock} in stock
                  </span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gold-primary/10 text-gold-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Add New Product Card */}
          <div className="card flex items-center justify-center border-2 border-dashed border-gold-primary/30 hover:border-gold-primary transition-colors cursor-pointer">
            <div className="text-center">
              <Plus className="h-12 w-12 text-gold-primary mx-auto mb-2" />
              <p className="text-gold-primary font-medium">Add New Product</p>
              <p className="text-gold-light text-sm">Click to create a new product</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="card">
          <h2 className="text-xl font-bold text-gold-primary mb-4">Catalog Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-bg-primary/50 rounded-lg">
              <div className="text-2xl font-bold text-gold-primary mb-1">{products.length}</div>
              <div className="text-gold-light text-sm">Total Products</div>
            </div>
            <div className="text-center p-4 bg-bg-primary/50 rounded-lg">
              <div className="text-2xl font-bold text-gold-primary mb-1">
                {categories.length - 1}
              </div>
              <div className="text-gold-light text-sm">Categories</div>
            </div>
            <div className="text-center p-4 bg-bg-primary/50 rounded-lg">
              <div className="text-2xl font-bold text-gold-primary mb-1">
                {products.reduce((sum, product) => sum + product.stock, 0)}
              </div>
              <div className="text-gold-light text-sm">Total Stock</div>
            </div>
            <div className="text-center p-4 bg-bg-primary/50 rounded-lg">
              <div className="text-2xl font-bold text-gold-primary mb-1">
                ₹{products.reduce((sum, product) => sum + product.price * product.stock, 0).toLocaleString()}
              </div>
              <div className="text-gold-light text-sm">Inventory Value</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogManager