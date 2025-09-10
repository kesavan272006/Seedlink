import { Routes, Route } from 'react-router-dom'
import ShopDiscovery from '../components/customer/ShopDiscovery'
import ShopProfile from '../components/customer/ShopProfile'
import ProductDetail from '../components/customer/ProductDetail'
import ARView from '../components/customer/ARView'

const CustomerPages = () => {
  return (
    <Routes>
      <Route path="discovery" element={<ShopDiscovery />} />
      <Route path="shop/:id" element={<ShopProfile />} />
      <Route path="product/:id" element={<ProductDetail />} />
      <Route path="ar-view/:id" element={<ARView />} />
    </Routes>
  )
}

export default CustomerPages