'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Grid, List, Heart, Share2, Eye } from 'lucide-react'
import CampaignCard from '@/components/CampaignCard'
import FilterSidebar from '@/components/FilterSidebar'

const DiscoverPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Mock data - in real app this would come from API
  const campaigns = [
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
      image: '/api/placeholder/400/300',
      location: 'Nigeria',
      isVerified: true,
      featured: true,
      backers: 234,
      progress: 90,
    },
    {
      id: '2',
      title: 'Tech Startup - AI Healthcare Platform',
      description: 'Revolutionary AI-powered healthcare platform for early disease detection.',
      category: 'Technology',
      type: 'EQUITY_OFFERING',
      goalAmount: 200000,
      currentAmount: 120000,
      currency: 'USD',
      daysLeft: 30,
      image: '/api/placeholder/400/300',
      location: 'Kenya',
      isVerified: true,
      featured: false,
      backers: 89,
      progress: 60,
    },
    {
      id: '3',
      title: 'Education Fund for Orphans',
      description: 'Providing education and school supplies for 500 orphaned children in Ghana.',
      category: 'Education',
      type: 'SOCIAL_CAUSE',
      goalAmount: 10000,
      currentAmount: 8500,
      currency: 'USD',
      daysLeft: 7,
      image: '/api/placeholder/400/300',
      location: 'Ghana',
      isVerified: true,
      featured: false,
      backers: 156,
      progress: 85,
    },
    {
      id: '4',
      title: 'AgriTech Innovation Hub',
      description: 'Building a technology hub to support agricultural innovation across Africa.',
      category: 'Agriculture',
      type: 'VENTURE_FUNDING',
      goalAmount: 150000,
      currentAmount: 95000,
      currency: 'USD',
      daysLeft: 45,
      image: '/api/placeholder/400/300',
      location: 'Uganda',
      isVerified: true,
      featured: true,
      backers: 67,
      progress: 63,
    },
    {
      id: '5',
      title: 'Clean Water Initiative',
      description: 'Installing clean water systems in 20 rural villages across Tanzania.',
      category: 'Healthcare',
      type: 'SOCIAL_CAUSE',
      goalAmount: 25000,
      currentAmount: 18000,
      currency: 'USD',
      daysLeft: 12,
      image: '/api/placeholder/400/300',
      location: 'Tanzania',
      isVerified: true,
      featured: false,
      backers: 312,
      progress: 72,
    },
    {
      id: '6',
      title: 'Mobile Banking App',
      description: 'Revolutionary mobile banking app designed for the African market.',
      category: 'Technology',
      type: 'EQUITY_OFFERING',
      goalAmount: 300000,
      currentAmount: 210000,
      currency: 'USD',
      daysLeft: 60,
      image: '/api/placeholder/400/300',
      location: 'South Africa',
      isVerified: true,
      featured: true,
      backers: 45,
      progress: 70,
    },
  ]

  const categories = [
    'All Categories',
    'Technology',
    'Renewable Energy',
    'Healthcare',
    'Education',
    'Agriculture',
    'Social Cause',
    'Personal Need',
  ]

  const types = [
    'All Types',
    'Crowdfunding',
    'Equity Offering',
    'Venture Funding',
    'Social Cause',
    'Personal Need',
  ]

  return (
    <div className="min-h-screen bg-accent-50">
      {/* Header */}
      <div className="bg-white border-b border-accent-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-accent-900 mb-4">
              Discover Amazing Projects
            </h1>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto">
              Explore thousands of innovative campaigns and investment opportunities 
              across Africa. Find projects that align with your values and goals.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-2xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search campaigns, categories, or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                />
              </div>

              {/* View Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-primary-100 text-primary-600'
                      : 'bg-accent-100 text-accent-600 hover:bg-accent-200'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    viewMode === 'list'
                      ? 'bg-primary-100 text-primary-600'
                      : 'bg-accent-100 text-accent-600 hover:bg-accent-200'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 px-4 py-2 bg-accent-100 text-accent-700 rounded-lg hover:bg-accent-200 transition-colors duration-200"
                >
                  <Filter className="w-5 h-5" />
                  <span>Filters</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-64 flex-shrink-0"
            >
              <FilterSidebar />
            </motion.div>
          )}

          {/* Campaigns Grid */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-accent-900">
                  {campaigns.length} Campaigns Found
                </h2>
                <p className="text-accent-600">
                  Showing the best opportunities for you
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <select className="px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option>Most Recent</option>
                  <option>Most Popular</option>
                  <option>Ending Soon</option>
                  <option>Highest Funded</option>
                </select>
              </div>
            </div>

            {/* Campaigns Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {campaigns.map((campaign, index) => (
                <motion.div
                  key={campaign.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CampaignCard 
                    campaign={campaign} 
                    viewMode={viewMode}
                  />
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <button className="btn-primary">
                Load More Campaigns
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscoverPage
