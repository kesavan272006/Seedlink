import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-bg-secondary border-t border-gold-primary/20 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gold-primary">VisioBiz<span className="text-teal">AI</span></span>
            </div>
            <p className="text-gold-light text-base">
              Transforming local commerce with immersive AI and AR experiences.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gold-primary hover:text-gold-light">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gold-primary hover:text-gold-light">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gold-primary hover:text-gold-light">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gold-primary tracking-wider uppercase">For Customers</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gold-light hover:text-gold-primary">Discover Shops</a></li>
                  <li><a href="#" className="text-base text-gold-light hover:text-gold-primary">AR Experience</a></li>
                  <li><a href="#" className="text-base text-gold-light hover:text-gold-primary">AI Assistant</a></li>
                  <li><a href="#" className="text-base text-gold-light hover:text-gold-primary">Bookmarks</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gold-primary tracking-wider uppercase">For Shopkeepers</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gold-light hover:text-gold-primary">Register Business</a></li>
                  <li><a href="#" className="text-base text-gold-light hover:text-gold-primary">Dashboard</a></li>
                  <li><a href="#" className="text-base text-gold-light hover:text-gold-primary">AdMagnet AI</a></li>
                  <li><a href="#" className="text-base text-gold-light hover:text-gold-primary">Analytics</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gold-primary tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gold-light hover:text-gold-primary">Help Center</a></li>
                  <li><a href="#" className="text-base text-gold-light hover:text-gold-primary">Privacy Policy</a></li>
                  <li><a href="#" className="text-base text-gold-light hover:text-gold-primary">Terms of Service</a></li>
                  <li><a href="#" className="text-base text-gold-light hover:text-gold-primary">Contact Us</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gold-primary tracking-wider uppercase">Contact</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex">
                    <Mail className="h-5 w-5 text-gold-primary mr-3" />
                    <span className="text-gold-light">info@visiobiz.ai</span>
                  </li>
                  <li className="flex">
                    <Phone className="h-5 w-5 text-gold-primary mr-3" />
                    <span className="text-gold-light">+91 98765 43210</span>
                  </li>
                  <li className="flex">
                    <MapPin className="h-5 w-5 text-gold-primary mr-3" />
                    <span className="text-gold-light">Bengaluru, India</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gold-primary/20 pt-8">
          <p className="text-base text-gold-light text-center">
            &copy; {new Date().getFullYear()} VisioBiz AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer