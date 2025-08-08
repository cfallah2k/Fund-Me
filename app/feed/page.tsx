'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  MoreHorizontal,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  MapPin,
  CheckCircle,
  Star,
  Play,
  Image as ImageIcon,
  Video,
  Link as LinkIcon
} from 'lucide-react'

const FeedPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  // Mock feed data
  const feedItems = [
    {
      id: '1',
      type: 'campaign_update',
      user: {
        name: 'Sarah Johnson',
        avatar: '/api/placeholder/40/40',
        isVerified: true
      },
      campaign: {
        title: 'Solar Energy for Rural Communities',
        id: '1'
      },
      content: 'Exciting news! We\'ve reached 90% of our funding goal! Thank you to all our amazing supporters. The solar panel installations will begin next month in the first 5 communities.',
      media: {
        type: 'image',
        url: '/api/placeholder/600/400'
      },
      timestamp: '2 hours ago',
      likes: 156,
      comments: 23,
      shares: 12,
      isLiked: false
    },
    {
      id: '2',
      type: 'investment_milestone',
      user: {
        name: 'Michael Chen',
        avatar: '/api/placeholder/40/40',
        isVerified: true
      },
      campaign: {
        title: 'Tech Startup - AI Healthcare Platform',
        id: '2'
      },
      content: 'Just invested $5,000 in this promising AI healthcare platform! The potential for early disease detection is incredible. Looking forward to seeing the impact.',
      media: null,
      timestamp: '4 hours ago',
      likes: 89,
      comments: 15,
      shares: 8,
      isLiked: true
    },
    {
      id: '3',
      type: 'campaign_launch',
      user: {
        name: 'Amina Hassan',
        avatar: '/api/placeholder/40/40',
        isVerified: true
      },
      campaign: {
        title: 'Mobile Banking App for Rural Areas',
        id: '5'
      },
      content: 'Thrilled to announce the launch of our mobile banking app campaign! This will bring financial inclusion to underserved rural communities across Tanzania.',
      media: {
        type: 'video',
        url: '/api/placeholder/600/400'
      },
      timestamp: '6 hours ago',
      likes: 234,
      comments: 45,
      shares: 67,
      isLiked: false
    },
    {
      id: '4',
      type: 'platform_announcement',
      user: {
        name: 'Fund-Me Team',
        avatar: '/api/placeholder/40/40',
        isVerified: true
      },
      campaign: null,
      content: '🎉 We\'ve just reached a major milestone: $2.5M+ raised across all campaigns! Thank you to our incredible community of fundraisers and investors.',
      media: null,
      timestamp: '1 day ago',
      likes: 567,
      comments: 89,
      shares: 234,
      isLiked: true
    },
    {
      id: '5',
      type: 'campaign_success',
      user: {
        name: 'David Okafor',
        avatar: '/api/placeholder/40/40',
        isVerified: true
      },
      campaign: {
        title: 'Education Fund for Orphans',
        id: '3'
      },
      content: '🎊 CAMPAIGN SUCCESS! We\'ve reached our goal of $10,000! 500 children will now receive quality education. Words cannot express our gratitude to all supporters.',
      media: {
        type: 'image',
        url: '/api/placeholder/600/400'
      },
      timestamp: '2 days ago',
      likes: 445,
      comments: 78,
      shares: 156,
      isLiked: false
    },
    {
      id: '6',
      type: 'investment_return',
      user: {
        name: 'Lisa Wang',
        avatar: '/api/placeholder/40/40',
        isVerified: true
      },
      campaign: {
        title: 'AgriTech Innovation Hub',
        id: '4'
      },
      content: 'Just received my first return from the AgriTech investment! 12.5% return in just 6 months. The platform\'s due diligence process really paid off.',
      media: null,
      timestamp: '3 days ago',
      likes: 123,
      comments: 34,
      shares: 23,
      isLiked: false
    }
  ]

  const filters = [
    { id: 'all', label: 'All Updates' },
    { id: 'campaigns', label: 'Campaign Updates' },
    { id: 'investments', label: 'Investment Activity' },
    { id: 'success', label: 'Success Stories' },
    { id: 'platform', label: 'Platform News' }
  ]

  const getFilteredItems = () => {
    if (activeFilter === 'all') return feedItems
    return feedItems.filter(item => {
      switch (activeFilter) {
        case 'campaigns':
          return item.type.includes('campaign')
        case 'investments':
          return item.type.includes('investment')
        case 'success':
          return item.type.includes('success')
        case 'platform':
          return item.type.includes('platform')
        default:
          return true
      }
    })
  }

  const getItemIcon = (type: string) => {
    switch (type) {
      case 'campaign_update':
        return <TrendingUp className="w-4 h-4 text-blue-600" />
      case 'investment_milestone':
        return <DollarSign className="w-4 h-4 text-green-600" />
      case 'campaign_launch':
        return <Star className="w-4 h-4 text-yellow-600" />
      case 'platform_announcement':
        return <CheckCircle className="w-4 h-4 text-purple-600" />
      case 'campaign_success':
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'investment_return':
        return <DollarSign className="w-4 h-4 text-green-600" />
      default:
        return <MessageCircle className="w-4 h-4 text-accent-600" />
    }
  }

  const getItemTypeLabel = (type: string) => {
    switch (type) {
      case 'campaign_update':
        return 'Campaign Update'
      case 'investment_milestone':
        return 'Investment Made'
      case 'campaign_launch':
        return 'Campaign Launched'
      case 'platform_announcement':
        return 'Platform News'
      case 'campaign_success':
        return 'Campaign Success'
      case 'investment_return':
        return 'Investment Return'
      default:
        return 'Update'
    }
  }

  return (
    <div className="min-h-screen bg-accent-50">
      {/* Header */}
      <div className="bg-white border-b border-accent-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-accent-900 mb-2">Activity Feed</h1>
              <p className="text-accent-600">Stay updated with the latest from campaigns and your network</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-lg mb-8"
        >
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  activeFilter === filter.id
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-accent-200 text-accent-600 hover:border-accent-300 hover:bg-accent-50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Feed Items */}
        <div className="space-y-6">
          {getFilteredItems().map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Feed Item Header */}
              <div className="p-6 border-b border-accent-200">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                    <span className="text-accent-600 font-semibold">
                      {item.user.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-accent-900">{item.user.name}</span>
                      {item.user.isVerified && (
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                      )}
                      <span className="text-accent-500">•</span>
                      <span className="text-sm text-accent-500">{item.timestamp}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getItemIcon(item.type)}
                      <span className="text-sm text-accent-600">{getItemTypeLabel(item.type)}</span>
                      {item.campaign && (
                        <>
                          <span className="text-accent-500">•</span>
                          <a href={`/campaigns/${item.campaign.id}`} className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                            {item.campaign.title}
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                  <button className="text-accent-400 hover:text-accent-600">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Feed Item Content */}
              <div className="p-6">
                <p className="text-accent-700 mb-4 leading-relaxed">{item.content}</p>

                {/* Media */}
                {item.media && (
                  <div className="mb-4">
                    <div className="relative bg-accent-100 rounded-lg overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                        {item.media.type === 'video' ? (
                          <div className="flex items-center space-x-2 text-accent-500">
                            <Play className="w-6 h-6" />
                            <span>Video Content</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2 text-accent-500">
                            <ImageIcon className="w-6 h-6" />
                            <span>Image Content</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Engagement Stats */}
                <div className="flex items-center justify-between text-sm text-accent-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <span>{item.likes} likes</span>
                    <span>{item.comments} comments</span>
                    <span>{item.shares} shares</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4 pt-4 border-t border-accent-200">
                  <button className={`flex items-center space-x-2 text-sm transition-colors ${
                    item.isLiked ? 'text-red-500' : 'text-accent-500 hover:text-red-500'
                  }`}>
                    <Heart className={`w-4 h-4 ${item.isLiked ? 'fill-current' : ''}`} />
                    <span>Like</span>
                  </button>
                  <button className="flex items-center space-x-2 text-sm text-accent-500 hover:text-accent-700 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>Comment</span>
                  </button>
                  <button className="flex items-center space-x-2 text-sm text-accent-500 hover:text-accent-700 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
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
            Load More Updates
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default FeedPage
