import { useState } from 'react'
import { Menu, X, Search, User, Store } from 'lucide-react'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [userType, setUserType] = useState('customer') // For demo purposes

  return (
    <nav className="bg-bg-secondary/90 backdrop-blur-md border-b border-gold-primary/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-gold-primary">VisioBiz<span className="text-teal">AI</span></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-gold-light hover:text-gold-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="/customer" className="text-gold-light hover:text-gold-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Discover
              </a>
              <a href="#" className="text-gold-light hover:text-gold-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                How It Works
              </a>
              <a href="#" className="text-gold-light hover:text-gold-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
            </div>
          </div>

          {/* Search and User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-primary h-4 w-4" />
              <input
                type="text"
                placeholder="Search shops or products..."
                className="pl-10 pr-4 py-2 bg-bg-primary/50 border border-gold-primary/30 rounded-lg text-gold-light placeholder-gold-primary/60 focus:outline-none focus:ring-2 focus:ring-gold-primary focus:border-transparent"
              />
            </div>

            {userType === 'customer' ? (
              <a href="/shopkeeper" className="btn-secondary flex items-center">
                <Store className="h-4 w-4 mr-2" />
                For Shopkeepers
              </a>
            ) : (
              <a href="/customer" className="btn-secondary flex items-center">
                <User className="h-4 w-4 mr-2" />
                For Customers
              </a>
            )}

            <a href="/auth" className="btn-primary">
              Sign In
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gold-primary hover:text-gold-light hover:bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-gold-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-bg-secondary border-t border-gold-primary/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-gold-light hover:text-gold-primary block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="/customer" className="text-gold-light hover:text-gold-primary block px-3 py-2 rounded-md text-base font-medium">
              Discover
            </a>
            <a href="#" className="text-gold-light hover:text-gold-primary block px-3 py-2 rounded-md text-base font-medium">
              How It Works
            </a>
            <a href="#" className="text-gold-light hover:text-gold-primary block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <div className="pt-4 pb-3 border-t border-gold-primary/20">
              <a href="/auth" className="block w-full text-center btn-primary mt-2">
                Sign In
              </a>
              {userType === 'customer' ? (
                <a href="/shopkeeper" className="block w-full text-center btn-secondary mt-2">
                  For Shopkeepers
                </a>
              ) : (
                <a href="/customer" className="block w-full text-center btn-secondary mt-2">
                  For Customers
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar