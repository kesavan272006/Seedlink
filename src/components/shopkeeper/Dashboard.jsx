import { useState } from 'react'
import { 
  Users, 
  Eye, 
  ShoppingBag, 
  TrendingUp, 
  BarChart3, 
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react'

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('monthly')

  const stats = [
    {
      title: 'Total Visitors',
      value: '1,247',
      change: '+12.5%',
      isPositive: true,
      icon: <Users className="h-6 w-6" />,
      color: 'bg-blue-500/20 text-blue-400'
    },
    {
      title: 'Store Views',
      value: '3,842',
      change: '+8.2%',
      isPositive: true,
      icon: <Eye className="h-6 w-6" />,
      color: 'bg-green-500/20 text-green-400'
    },
    {
      title: 'Products Viewed',
      value: '8,156',
      change: '+15.3%',
      isPositive: true,
      icon: <ShoppingBag className="h-6 w-6" />,
      color: 'bg-purple-500/20 text-purple-400'
    },
    {
      title: 'Conversion Rate',
      value: '4.2%',
      change: '-2.1%',
      isPositive: false,
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'bg-yellow-500/20 text-yellow-400'
    }
  ]

  const recentActivities = [
    {
      id: 1,
      action: 'New product added',
      item: 'Designer Handbag',
      time: '2 hours ago',
      type: 'add'
    },
    {
      id: 2,
      action: 'Store viewed',
      item: 'From mobile device',
      time: '5 hours ago',
      type: 'view'
    },
    {
      id: 3,
      action: 'Ad campaign started',
      item: 'Summer Collection',
      time: '1 day ago',
      type: 'ad'
    },
    {
      id: 4,
      action: 'Product updated',
      item: 'Men\'s Formal Shirt',
      time: '2 days ago',
      type: 'update'
    }
  ]

  return (
    <div className="min-h-screen bg-bg-primary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gold-primary mb-2">Shopkeeper Dashboard</h1>
            <p className="text-gold-light">Welcome back! Here's your store performance overview.</p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-bg-secondary border border-gold-primary/30 rounded-lg px-4 py-2 text-gold-light focus:outline-none focus:ring-2 focus:ring-gold-primary"
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
            </select>
            <button className="btn-primary">
              Generate Report
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className={`flex items-center text-sm font-medium ${
                  stat.isPositive ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stat.isPositive ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                  {stat.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gold-primary mb-2">{stat.value}</h3>
              <p className="text-gold-light">{stat.title}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Chart */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gold-primary">Performance Overview</h2>
              <BarChart3 className="h-5 w-5 text-gold-primary" />
            </div>
            <div className="bg-bg-primary/50 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-gold-primary" />
                </div>
                <p className="text-gold-light">Interactive chart would be displayed here</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gold-primary">Recent Activity</h2>
              <Calendar className="h-5 w-5 text-gold-primary" />
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center p-3 bg-bg-primary/50 rounded-lg">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    activity.type === 'add' ? 'bg-green-500/20' :
                    activity.type === 'view' ? 'bg-blue-500/20' :
                    activity.type === 'ad' ? 'bg-purple-500/20' : 'bg-yellow-500/20'
                  }`}>
                    <div className={`${
                      activity.type === 'add' ? 'text-green-400' :
                      activity.type === 'view' ? 'text-blue-400' :
                      activity.type === 'ad' ? 'text-purple-400' : 'text-yellow-400'
                    }`}>
                      {activity.type === 'add' && <TrendingUp className="h-4 w-4" />}
                      {activity.type === 'view' && <Eye className="h-4 w-4" />}
                      {activity.type === 'ad' && <BarChart3 className="h-4 w-4" />}
                      {activity.type === 'update' && <ShoppingBag className="h-4 w-4" />}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gold-primary font-medium">{activity.action}</p>
                    <p className="text-gold-light text-sm">{activity.item}</p>
                  </div>
                  <span className="text-gold-light text-sm">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card mt-8">
          <h2 className="text-xl font-bold text-gold-primary mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="/shopkeeper/profile" className="btn-secondary text-center py-4">
              <div className="w-12 h-12 bg-gold-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="h-6 w-6 text-gold-primary" />
              </div>
              Manage Profile
            </a>
            <a href="/shopkeeper/catalog" className="btn-secondary text-center py-4">
              <div className="w-12 h-12 bg-gold-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <ShoppingBag className="h-6 w-6 text-gold-primary" />
              </div>
              Manage Catalog
            </a>
            <a href="/shopkeeper/ads" className="btn-secondary text-center py-4">
              <div className="w-12 h-12 bg-gold-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="h-6 w-6 text-gold-primary" />
              </div>
              Manage Ads
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard