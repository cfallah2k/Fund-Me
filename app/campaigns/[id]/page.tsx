'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Share2, 
  MapPin, 
  Calendar, 
  Users, 
  DollarSign, 
  TrendingUp,
  MessageCircle,
  CheckCircle,
  Star,
  ArrowLeft,
  Play,
  FileText,
  Globe,
  Shield
} from 'lucide-react'
import Link from 'next/link'

const CampaignDetailPage = ({ params }: { params: { id: string } }) => {
  const [activeTab, setActiveTab] = useState('overview')
  const [investmentAmount, setInvestmentAmount] = useState('')
  const [isLiked, setIsLiked] = useState(false)

  // Mock campaign data - in real app this would come from API
  const campaign = {
    id: params.id,
    title: 'Solar Energy for Rural Communities',
    description: 'We are bringing clean, affordable solar energy to 10,000 rural households across Nigeria. Our innovative solar panel technology will provide reliable electricity to communities that have been living without power for generations.',
    shortDescription: 'Bringing clean, affordable solar energy to 10,000 rural households across Nigeria.',
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
    images: ['/api/placeholder/800/400', '/api/placeholder/800/400', '/api/placeholder/800/400'],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    equityPercentage: null,
    minInvestment: null,
    maxInvestment: null,
    risks: 'Potential delays in solar panel delivery due to supply chain issues. Weather conditions may affect installation timelines.',
    team: 'Our team consists of experienced renewable energy engineers, community development specialists, and local partners with deep knowledge of rural Nigerian communities.',
    updates: [
      {
        id: '1',
        title: 'Campaign Launch Success!',
        content: 'We\'ve reached 50% of our goal in just the first week. Thank you to all our early supporters!',
        date: '2024-01-15',
        author: 'Sarah Johnson'
      },
      {
        id: '2',
        title: 'Partnership Announcement',
        content: 'We\'re excited to announce our partnership with the Nigerian Ministry of Energy to expand our reach.',
        date: '2024-01-10',
        author: 'Sarah Johnson'
      }
    ],
    rewards: [
      {
        id: '1',
        title: 'Early Supporter',
        description: 'Get your name on our website and a thank you card',
        amount: 25,
        claimed: 45,
        total: 100
      },
      {
        id: '2',
        title: 'Solar Panel Sponsor',
        description: 'Sponsor one solar panel and get updates on its installation',
        amount: 100,
        claimed: 12,
        total: 50
      },
      {
        id: '3',
        title: 'Community Hero',
        description: 'Visit the installation site and meet the community',
        amount: 500,
        claimed: 3,
        total: 10
      }
    ],
    comments: [
      {
        id: '1',
        user: 'Michael Chen',
        content: 'This is exactly what rural communities need. Happy to support!',
        date: '2024-01-15',
        avatar: '/api/placeholder/40/40'
      },
      {
        id: '2',
        user: 'Amina Hassan',
        content: 'I\'m from Nigeria and this project will make a huge difference. Thank you!',
        date: '2024-01-14',
        avatar: '/api/placeholder/40/40'
      }
    ]
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: campaign.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'updates', label: 'Updates', icon: MessageCircle },
    { id: 'rewards', label: 'Rewards', icon: Star },
    { id: 'comments', label: 'Comments', icon: MessageCircle },
  ]

  const handleInvestment = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Investment amount:', investmentAmount)
  }

  return (
    <div className="min-h-screen bg-accent-50">
      {/* Header */}
      <div className="bg-white border-b border-accent-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/discover"
              className="flex items-center space-x-2 text-accent-600 hover:text-accent-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Discover</span>
            </Link>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-lg transition-colors ${
                  isLiked 
                    ? 'text-red-500 bg-red-50' 
                    : 'text-accent-600 hover:text-red-500 hover:bg-red-50'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 text-accent-600 hover:text-accent-900 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Campaign Images */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-96 bg-gradient-to-br from-primary-100 to-secondary-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-accent-500 text-lg">Campaign Images</span>
                </div>
                {campaign.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-secondary-600 text-white text-sm rounded-full">
                      Featured
                    </span>
                  </div>
                )}
                {campaign.videoUrl && (
                  <button className="absolute top-4 right-4 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors">
                    <Play className="w-6 h-6" />
                  </button>
                )}
              </div>
            </div>

            {/* Campaign Info */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h1 className="text-3xl font-bold text-accent-900">
                      {campaign.title}
                    </h1>
                    {campaign.isVerified && (
                      <CheckCircle className="w-6 h-6 text-primary-600" />
                    )}
                  </div>
                  <p className="text-xl text-accent-600 mb-4">
                    {campaign.shortDescription}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-accent-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {campaign.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {campaign.daysLeft} days left
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {campaign.backers} backers
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-accent-600">Raised</span>
                  <span className="font-semibold text-accent-900">
                    {formatCurrency(campaign.currentAmount)} of {formatCurrency(campaign.goalAmount)}
                  </span>
                </div>
                <div className="w-full bg-accent-200 rounded-full h-3">
                  <div 
                    className="bg-primary-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${campaign.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-accent-600">{campaign.progress}% funded</span>
                  <span className="text-accent-600">{campaign.daysLeft} days to go</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-accent-200 mb-6">
                <nav className="flex space-x-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-accent-500 hover:text-accent-700'
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="min-h-96">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-accent-900 mb-3">About This Project</h3>
                      <p className="text-accent-700 leading-relaxed">
                        {campaign.description}
                      </p>
                    </div>

                    {campaign.risks && (
                      <div>
                        <h3 className="text-lg font-semibold text-accent-900 mb-3">Risks & Challenges</h3>
                        <p className="text-accent-700 leading-relaxed">
                          {campaign.risks}
                        </p>
                      </div>
                    )}

                    {campaign.team && (
                      <div>
                        <h3 className="text-lg font-semibold text-accent-900 mb-3">About the Team</h3>
                        <p className="text-accent-700 leading-relaxed">
                          {campaign.team}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'updates' && (
                  <div className="space-y-6">
                    {campaign.updates.map((update) => (
                      <div key={update.id} className="border-b border-accent-200 pb-6 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-accent-900">{update.title}</h3>
                          <span className="text-sm text-accent-500">{update.date}</span>
                        </div>
                        <p className="text-accent-700 mb-2">{update.content}</p>
                        <span className="text-sm text-accent-500">— {update.author}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'rewards' && (
                  <div className="space-y-6">
                    {campaign.rewards.map((reward) => (
                      <div key={reward.id} className="border border-accent-200 rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-accent-900 mb-2">{reward.title}</h3>
                            <p className="text-accent-700 mb-3">{reward.description}</p>
                            <div className="text-2xl font-bold text-primary-600">
                              {formatCurrency(reward.amount)}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-accent-500 mb-1">
                              {reward.claimed} of {reward.total} claimed
                            </div>
                            <div className="w-24 bg-accent-200 rounded-full h-2">
                              <div 
                                className="bg-primary-500 h-2 rounded-full"
                                style={{ width: `${(reward.claimed / reward.total) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <button className="btn-primary w-full">
                          Select This Reward
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'comments' && (
                  <div className="space-y-6">
                    {campaign.comments.map((comment) => (
                      <div key={comment.id} className="flex space-x-4">
                        <div className="w-10 h-10 bg-accent-200 rounded-full flex items-center justify-center">
                          <span className="text-accent-600 font-semibold">
                            {comment.user.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-accent-900">{comment.user}</span>
                            <span className="text-sm text-accent-500">{comment.date}</span>
                          </div>
                          <p className="text-accent-700">{comment.content}</p>
                        </div>
                      </div>
                    ))}
                    
                    <div className="mt-6">
                      <textarea
                        placeholder="Add a comment..."
                        className="w-full p-4 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        rows={3}
                      ></textarea>
                      <button className="btn-primary mt-3">
                        Post Comment
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Investment Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-accent-900 mb-4">Support This Project</h3>
              
              <form onSubmit={handleInvestment} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-accent-700 mb-2">
                    Investment Amount
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-400 w-5 h-5" />
                    <input
                      type="number"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full pl-10 pr-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      min="1"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Invest Now
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-accent-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-accent-600">Platform Fee</span>
                  <span className="text-accent-900">5%</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-accent-600">Payment Processing</span>
                  <span className="text-accent-900">2.9% + $0.30</span>
                </div>
              </div>
            </div>

            {/* Campaign Stats */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-accent-900 mb-4">Campaign Stats</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-accent-600">Goal</span>
                  <span className="font-semibold text-accent-900">{formatCurrency(campaign.goalAmount)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-600">Raised</span>
                  <span className="font-semibold text-primary-600">{formatCurrency(campaign.currentAmount)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-600">Backers</span>
                  <span className="font-semibold text-accent-900">{campaign.backers}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-600">Days Left</span>
                  <span className="font-semibold text-accent-900">{campaign.daysLeft}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-600">Category</span>
                  <span className="font-semibold text-accent-900">{campaign.category}</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-accent-900 mb-4">Trust & Safety</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary-600" />
                  <span className="text-sm text-accent-700">Verified Campaign</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-primary-600" />
                  <span className="text-sm text-accent-700">Secure Payments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-primary-600" />
                  <span className="text-sm text-accent-700">Transparent Updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignDetailPage
