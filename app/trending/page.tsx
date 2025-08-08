'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Flame, 
  Star, 
  Users, 
  Calendar,
  Filter,
  Grid,
  List,
  ArrowUp,
  ArrowDown,
  Eye,
  Heart,
  Share2
} from 'lucide-react'
import CampaignCard from '@/components/CampaignCard'

const TrendingPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('trending')
  const [timeFilter, setTimeFilter] = useState('all')

  // Mock trending campaigns data
  const trendingCampaigns = [
    {
      id: '1',
      title: 'Solar Energy for Rural Communities',
      description: 'Bringing clean, affordable solar energy to 10,000 rural households across Nigeria.',
      category: 'Renewable Energy',
      type: 'CROWDFUNDING',
      goalAmount: 50000,
      currentAmount: 45000,
      currency: 'USD',
      daysLeft: 15,
      location: 'Nigeria',
      isVerified: true,
      featured: true,
      backers: 234,
      progress: 90,
      image: '/api/placeholder/400/300',
      trendingScore: 95,
      views: 15420,
      shares: 892
    },
    {
      id: '2',
      title: 'Tech Startup - AI Healthcare Platform',
      description: 'Revolutionary AI-powered healthcare platform for early disease detection.',
      category: 'Healthcare',
      type: 'EQUITY_OFFERING',
      goalAmount: 200000,
      currentAmount: 120000,
      currency: 'USD',
      daysLeft: 30,
      location: 'Kenya',
      isVerified: true,
      featured: true,
      backers: 89,
      progress: 60,
      image: '/api/placeholder/400/300',
      trendingScore: 88,
      views: 12340,
      shares: 567
    },
    {
      id: '3',
      title: 'Education Fund for Orphans',
      description: 'Providing quality education to 500 orphaned children in rural communities.',
      category: 'Education',
      type: 'SOCIAL_CAUSE',
      goalAmount: 10000,
      currentAmount: 8500,
      currency: 'USD',
      daysLeft: 7,
      location: 'Ghana',
      isVerified: true,
      featured: false,
      backers: 156,
      progress: 85,
      image: '/api/placeholder/400/300',
      trendingScore: 92,
      views: 9876,
      shares: 445
    },
    {
      id: '4',
      title: 'AgriTech Innovation Hub',
      description: 'Modern agricultural technology solutions for small-scale farmers.',
      category: 'Agriculture',
      type: 'CROWDFUNDING',
      goalAmount: 75000,
      currentAmount: 68000,
      currency: 'USD',
      daysLeft: 22,
      location: 'Uganda',
      isVerified: true,
      featured: true,
      backers: 203,
      progress: 91,
      image: '/api/placeholder/400/300',
      trendingScore: 87,
      views: 11234,
      shares: 678
    },
    {
      id: '5',
      title: 'Mobile Banking App for Rural Areas',
      description: 'Financial inclusion through mobile banking for underserved communities.',
      category: 'Fintech',
      type: 'EQUITY_OFFERING',
      goalAmount: 150000,
      currentAmount: 95000,
      currency: 'USD',
      daysLeft: 45,
      location: 'Tanzania',
      isVerified: true,
      featured: false,
      backers: 67,
      progress: 63,
      image: '/api/placeholder/400/300',
      trendingScore: 85,
      views: 8765,
      shares: 334
    },
    {
      id: '6',
      title: 'Clean Water Initiative',
      description: 'Installing water purification systems in 50 villages.',
      category: 'Environment',
      type: 'SOCIAL_CAUSE',
      goalAmount: 25000,
      currentAmount: 22000,
      currency: 'USD',
      daysLeft: 12,
      location: 'Rwanda',
      isVerified: true,
      featured: true,
      backers: 189,
      progress: 88,
      image: '/api/placeholder/400/300',
      trendingScore: 89,
      views: 13456,
      shares: 789
    }
  ]

  const sortOptions = [
    { value: 'trending', label: 'Trending Score', icon: TrendingUp },
    { value: 'popular', label: 'Most Popular', icon: Users },
    { value: 'funding', label: 'Funding Progress', icon: ArrowUp },
    { value: 'ending', label: 'Ending Soon', icon: Calendar },
    { value: 'newest', label: 'Newest', icon: Star }
  ]

  const timeFilters = [
    { value: 'all', label: 'All Time' },
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' }
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  return (
    <div className="min-h-screen bg-accent-50">
      {/* Header */}
      <div className="bg-white border-b border-accent-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-accent-900 mb-2">Trending Campaigns</h1>
              <p className="text-accent-600">Discover the most popular and trending campaigns on Fund-Me</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-primary-100 text-primary-600' 
                    : 'text-accent-600 hover:text-accent-900'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-primary-100 text-primary-600' 
                    : 'text-accent-600 hover:text-accent-900'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Stats */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="font-semibold text-accent-900">Trending Now</span>
              </div>
              <span className="text-accent-600">•</span>
              <span className="text-accent-600">{trendingCampaigns.length} campaigns</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-accent-700">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 border border-accent-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-accent-700">Time:</label>
                <select
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value)}
                  className="px-3 py-1 border border-accent-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {timeFilters.map((filter) => (
                    <option key={filter.value} value={filter.value}>
                      {filter.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-accent-600">Total Views</p>
                <p className="text-2xl font-bold text-accent-900">{formatNumber(72345)}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-accent-600">Total Shares</p>
                <p className="text-2xl font-bold text-accent-900">{formatNumber(3698)}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Share2 className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-accent-600">Total Backers</p>
                <p className="text-2xl font-bold text-accent-900">{formatNumber(940)}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-accent-600">Avg. Trending Score</p>
                <p className="text-2xl font-bold text-accent-900">89.5</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Campaigns Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {trendingCampaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Campaign Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-accent-500 text-lg">Campaign Image</span>
                  </div>
                  
                  {/* Trending Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-1 px-2 py-1 bg-orange-500 text-white text-xs rounded-full">
                      <Flame className="w-3 h-3" />
                      <span>{campaign.trendingScore}</span>
                    </div>
                  </div>
                  
                  {/* Featured Badge */}
                  {campaign.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-secondary-600 text-white text-xs rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Campaign Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-accent-900 text-lg">{campaign.title}</h3>
                    <button className="text-accent-400 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <p className="text-accent-600 text-sm mb-4 line-clamp-2">{campaign.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-accent-600">Raised</span>
                      <span className="font-semibold text-accent-900">
                        {formatCurrency(campaign.currentAmount)} of {formatCurrency(campaign.goalAmount)}
                      </span>
                    </div>
                    <div className="w-full bg-accent-200 rounded-full h-2">
                      <div 
                        className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${campaign.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span className="text-accent-600">{campaign.progress}% funded</span>
                      <span className="text-accent-600">{campaign.daysLeft} days left</span>
                    </div>
                  </div>

                  {/* Campaign Stats */}
                  <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                    <div className="text-center">
                      <p className="text-accent-600">Backers</p>
                      <p className="font-semibold text-accent-900">{campaign.backers}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-accent-600">Views</p>
                      <p className="font-semibold text-accent-900">{formatNumber(campaign.views)}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-accent-600">Shares</p>
                      <p className="font-semibold text-accent-900">{formatNumber(campaign.shares)}</p>
                    </div>
                  </div>

                  {/* Campaign Meta */}
                  <div className="flex items-center justify-between text-sm text-accent-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-accent-100 rounded-full text-xs">
                        {campaign.category}
                      </span>
                      <span>•</span>
                      <span>{campaign.location}</span>
                    </div>
                    {campaign.isVerified && (
                      <div className="flex items-center space-x-1 text-green-600">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        <span className="text-xs">Verified</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 btn-primary">
                      Invest Now
                    </button>
                    <button className="p-2 text-accent-600 hover:text-accent-900 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="btn-outline">
            Load More Trending Campaigns
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default TrendingPage
