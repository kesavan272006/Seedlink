import { Routes, Route } from 'react-router-dom'
import Dashboard from '../components/shopkeeper/Dashboard'
import ProfileManager from '../components/shopkeeper/ProfileManager'
import CatalogManager from '../components/shopkeeper/CatalogManager'
import AdsManager from '../components/shopkeeper/AdsManager'

const ShopkeeperPages = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="profile" element={<ProfileManager />} />
      <Route path="catalog" element={<CatalogManager />} />
      <Route path="ads" element={<AdsManager />} />
    </Routes>
  )
}

export default ShopkeeperPages