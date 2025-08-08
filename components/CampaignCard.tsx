'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Share2, Eye, MapPin, Clock, Users, CheckCircle } from 'lucide-react'

interface Campaign {
  id: string
  title: string
  description: string
  category: string
  type: string
  goalAmount: number
  currentAmount: number
  currency: string
  daysLeft: number
  image: string
  location: string
  isVerified: boolean
  featured: boolean
  backers: number
  progress: number
}

interface CampaignCardProps {
  campaign: Campaign
  viewMode: 'grid' | 'list'
}

const CampaignCard = ({ campaign, viewMode }: CampaignCardProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: campaign.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'CROWDFUNDING':
        return 'bg-primary-100 text-primary-700'
      case 'EQUITY_OFFERING':
        return 'bg-secondary-100 text-secondary-700'
      case 'VENTURE_FUNDING':
        return 'bg-purple-100 text-purple-700'
      case 'SOCIAL_CAUSE':
        return 'bg-green-100 text-green-700'
      default:
        return 'bg-accent-100 text-accent-700'
    }
  }

  if (viewMode === 'list') {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="card hover:shadow-xl transition-all duration-300"
      >
        <div className="flex gap-6">
          {/* Image */}
          <div className="flex-shrink-0">
            <div className="w-48 h-32 bg-accent-200 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <span className="text-accent-500 text-sm">Campaign Image</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-accent-900">
                    {campaign.title}
                  </h3>
                  {campaign.isVerified && (
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                  )}
                  {campaign.featured && (
                    <span className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-accent-600 mb-3 line-clamp-2">
                  {campaign.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-accent-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {campaign.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {campaign.daysLeft} days left
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {campaign.backers} backers
                  </div>
                </div>
              </div>

              {/* Progress and Actions */}
              <div className="flex-shrink-0 ml-6">
                <div className="text-right mb-3">
                  <div className="text-2xl font-bold text-accent-900">
                    {formatCurrency(campaign.currentAmount)}
                  </div>
                  <div className="text-sm text-accent-600">
                    of {formatCurrency(campaign.goalAmount)} goal
                  </div>
                </div>
                <div className="w-32 bg-accent-200 rounded-full h-2 mb-3">
                  <div 
                    className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${campaign.progress}%` }}
                  ></div>
                </div>
                <div className="text-sm text-accent-600 mb-4">
                  {campaign.progress}% funded
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-accent-600 hover:text-primary-600 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-accent-600 hover:text-primary-600 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <Link 
                    href={`/campaigns/${campaign.id}`}
                    className="btn-primary text-sm px-4 py-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  // Grid view
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="card hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative mb-4">
        <div className="w-full h-48 bg-accent-200 rounded-lg overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
            <span className="text-accent-500 text-sm">Campaign Image</span>
          </div>
        </div>
        {campaign.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-secondary-600 text-white text-xs rounded-full">
              Featured
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3 flex gap-2">
          <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-accent-600 hover:text-primary-600 transition-colors">
            <Heart className="w-4 h-4" />
          </button>
          <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-accent-600 hover:text-primary-600 transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(campaign.type)}`}>
            {campaign.type.replace('_', ' ')}
          </span>
          <div className="flex items-center gap-1">
            {campaign.isVerified && (
              <CheckCircle className="w-4 h-4 text-primary-600" />
            )}
            <span className="text-xs text-accent-500">{campaign.category}</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-accent-900 line-clamp-2">
          {campaign.title}
        </h3>

        <p className="text-accent-600 text-sm line-clamp-2">
          {campaign.description}
        </p>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-accent-600">Raised</span>
            <span className="font-semibold text-accent-900">
              {formatCurrency(campaign.currentAmount)}
            </span>
          </div>
          <div className="w-full bg-accent-200 rounded-full h-2">
            <div 
              className="bg-primary-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${campaign.progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-accent-500">
            <span>{campaign.progress}% funded</span>
            <span>{campaign.daysLeft} days left</span>
          </div>
        </div>

        {/* Location and Backers */}
        <div className="flex items-center justify-between text-sm text-accent-500">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {campaign.location}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {campaign.backers} backers
          </div>
        </div>

        {/* Action Button */}
        <Link 
          href={`/campaigns/${campaign.id}`}
          className="btn-primary w-full text-center"
        >
          View Campaign
        </Link>
      </div>
    </motion.div>
  )
}

export default CampaignCard
