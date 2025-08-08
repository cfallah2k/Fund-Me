'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Calendar,
  Eye,
  Edit,
  Plus,
  BarChart3,
  Settings,
  Bell,
  Heart,
  Share2,
  ArrowRight,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react'
import Link from 'next/link'

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock user data
  const user = {
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    userType: 'STARTUP',
    isVerified: true,
    joinDate: '2023-06-15'
  }

  // Mock dashboard stats
  const stats = {
    totalRaised: 125000,
    activeCampaigns: 3,
    totalInvestments: 8,
    portfolioValue: 45000
  }

  // Mock campaigns
  const campaigns = [
    {
      id: '1',
      title: 'Solar Energy for Rural Communities',
      type: 'CROWDFUNDING',
      goalAmount: 50000,
      currentAmount: 45000,
      progress: 90,
      daysLeft: 15,
      status: 'ACTIVE',
      backers: 234,
      isVerified: true
    },
    {
      id: '2',
      title: 'Tech Startup - AI Healthcare Platform',
      type: 'EQUITY_OFFERING',
      goalAmount: 200000,
      currentAmount: 120000,
      progress: 60,
      daysLeft: 30,
      status: 'ACTIVE',
      backers: 89,
      isVerified: true
    },
    {
      id: '3',
      title: 'Education Fund for Orphans',
      type: 'SOCIAL_CAUSE',
      goalAmount: 10000,
      currentAmount: 8500,
      progress: 85,
      daysLeft: 7,
      status: 'ENDING_SOON',
      backers: 156,
      isVerified: true
    }
  ]

  // Mock investments
  const investments = [
    {
      id: '1',
      campaignTitle: 'AgriTech Innovation Hub',
      amount: 5000,
      date: '2024-01-10',
      status: 'COMPLETED',
      returns: 12.5
    },
    {
      id: '2',
      campaignTitle: 'Mobile Banking App',
      amount: 2500,
      date: '2024-01-05',
      status: 'PENDING',
      returns: null
    },
    {
      id: '3',
      campaignTitle: 'Clean Water Initiative',
      amount: 1000,
      date: '2023-12-20',
      status: 'COMPLETED',
      returns: 8.3
    }
  ]

  // Mock notifications
  const notifications = [
    {
      id: '1',
      title: 'Campaign Update',
      message: 'Your campaign "Solar Energy" has reached 90% of its goal!',
      type: 'SUCCESS',
      date: '2024-01-15',
      isRead: false
    },
    {
      id: '2',
      title: 'New Investment',
      message: 'You received a $2,500 investment in your AI Healthcare Platform.',
      type: 'INFO',
      date: '2024-01-14',
      isRead: true
    },
    {
      id: '3',
      title: 'Campaign Ending Soon',
      message: 'Your "Education Fund" campaign ends in 7 days.',
      type: 'WARNING',
      date: '2024-01-13',
      isRead: false
    }
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'campaigns', label: 'My Campaigns', icon: BarChart3 },
    { id: 'investments', label: 'My Investments', icon: DollarSign },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'text-green-600 bg-green-100'
      case 'ENDING_SOON':
        return 'text-orange-600 bg-orange-100'
      case 'COMPLETED':
        return 'text-blue-600 bg-blue-100'
      case 'PENDING':
        return 'text-yellow-600 bg-yellow-100'
      default:
        return 'text-accent-600 bg-accent-100'
    }
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'SUCCESS':
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'WARNING':
        return <AlertCircle className="w-5 h-5 text-orange-600" />
      case 'INFO':
        return <Bell className="w-5 h-5 text-blue-600" />
      default:
        return <Bell className="w-5 h-5 text-accent-600" />
    }
  }

  return (
    <div className="min-h-screen bg-accent-50">
      {/* Header */}
      <div className="bg-white border-b border-accent-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-accent-900">Dashboard</h1>
              <p className="text-accent-600">Welcome back, {user.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-accent-600 hover:text-accent-900 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-accent-600 hover:text-accent-900 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-accent-600">Total Raised</p>
                <p className="text-2xl font-bold text-accent-900">{formatCurrency(stats.totalRaised)}</p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary-600" />
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
                <p className="text-sm text-accent-600">Active Campaigns</p>
                <p className="text-2xl font-bold text-accent-900">{stats.activeCampaigns}</p>
              </div>
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-secondary-600" />
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
                <p className="text-sm text-accent-600">Total Investments</p>
                <p className="text-2xl font-bold text-accent-900">{stats.totalInvestments}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
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
                <p className="text-sm text-accent-600">Portfolio Value</p>
                <p className="text-2xl font-bold text-accent-900">{formatCurrency(stats.portfolioValue)}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-accent-200">
            <nav className="flex space-x-8 px-6">
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

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Quick Actions */}
                <div>
                  <h3 className="text-lg font-semibold text-accent-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link
                      href="/campaigns/new"
                      className="flex items-center space-x-3 p-4 border border-accent-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
                    >
                      <Plus className="w-6 h-6 text-primary-600" />
                      <div>
                        <p className="font-medium text-accent-900">Create Campaign</p>
                        <p className="text-sm text-accent-600">Start a new fundraising campaign</p>
                      </div>
                    </Link>
                    <Link
                      href="/discover"
                      className="flex items-center space-x-3 p-4 border border-accent-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
                    >
                      <Eye className="w-6 h-6 text-primary-600" />
                      <div>
                        <p className="font-medium text-accent-900">Discover Projects</p>
                        <p className="text-sm text-accent-600">Find investment opportunities</p>
                      </div>
                    </Link>
                    <Link
                      href="/profile"
                      className="flex items-center space-x-3 p-4 border border-accent-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
                    >
                      <Settings className="w-6 h-6 text-primary-600" />
                      <div>
                        <p className="font-medium text-accent-900">Profile Settings</p>
                        <p className="text-sm text-accent-600">Manage your account</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h3 className="text-lg font-semibold text-accent-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {notifications.slice(0, 3).map((notification) => (
                      <div key={notification.id} className={`flex items-start space-x-3 p-4 rounded-lg ${
                        notification.isRead ? 'bg-accent-50' : 'bg-blue-50'
                      }`}>
                        {getNotificationIcon(notification.type)}
                        <div className="flex-1">
                          <p className="font-medium text-accent-900">{notification.title}</p>
                          <p className="text-sm text-accent-600">{notification.message}</p>
                          <p className="text-xs text-accent-500 mt-1">{notification.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Campaigns Tab */}
            {activeTab === 'campaigns' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-accent-900">My Campaigns</h3>
                  <Link href="/campaigns/new" className="btn-primary">
                    Create New Campaign
                  </Link>
                </div>

                <div className="space-y-4">
                  {campaigns.map((campaign) => (
                    <div key={campaign.id} className="border border-accent-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-lg font-semibold text-accent-900">{campaign.title}</h4>
                            {campaign.isVerified && (
                              <CheckCircle className="w-5 h-5 text-primary-600" />
                            )}
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(campaign.status)}`}>
                              {campaign.status.replace('_', ' ')}
                            </span>
                          </div>
                          <p className="text-accent-600 mb-3">{campaign.type.replace('_', ' ')}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Link
                            href={`/campaigns/${campaign.id}`}
                            className="p-2 text-accent-600 hover:text-accent-900 transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                          <button className="p-2 text-accent-600 hover:text-accent-900 transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-accent-600">Progress</p>
                          <p className="font-semibold text-accent-900">{campaign.progress}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-accent-600">Raised</p>
                          <p className="font-semibold text-accent-900">
                            {formatCurrency(campaign.currentAmount)} / {formatCurrency(campaign.goalAmount)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-accent-600">Backers</p>
                          <p className="font-semibold text-accent-900">{campaign.backers}</p>
                        </div>
                      </div>

                      <div className="w-full bg-accent-200 rounded-full h-2 mb-4">
                        <div 
                          className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${campaign.progress}%` }}
                        ></div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-accent-600">
                        <span>{campaign.daysLeft} days left</span>
                        <Link href={`/campaigns/${campaign.id}`} className="text-primary-600 hover:text-primary-700">
                          View Details <ArrowRight className="w-4 h-4 inline ml-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Investments Tab */}
            {activeTab === 'investments' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-accent-900">My Investments</h3>
                  <Link href="/discover" className="btn-primary">
                    Find More Opportunities
                  </Link>
                </div>

                <div className="space-y-4">
                  {investments.map((investment) => (
                    <div key={investment.id} className="border border-accent-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-accent-900 mb-1">{investment.campaignTitle}</h4>
                          <p className="text-accent-600">Invested {formatCurrency(investment.amount)}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(investment.status)}`}>
                            {investment.status}
                          </span>
                          {investment.returns && (
                            <p className="text-sm text-green-600 mt-1">+{investment.returns}% return</p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-accent-600">
                        <span>Invested on {investment.date}</span>
                        <Link href="#" className="text-primary-600 hover:text-primary-700">
                          View Details <ArrowRight className="w-4 h-4 inline ml-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-accent-900">Notifications</h3>
                  <button className="text-sm text-primary-600 hover:text-primary-700">
                    Mark all as read
                  </button>
                </div>

                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className={`flex items-start space-x-3 p-4 rounded-lg ${
                      notification.isRead ? 'bg-accent-50' : 'bg-blue-50'
                    }`}>
                      {getNotificationIcon(notification.type)}
                      <div className="flex-1">
                        <p className="font-medium text-accent-900">{notification.title}</p>
                        <p className="text-sm text-accent-600">{notification.message}</p>
                        <p className="text-xs text-accent-500 mt-1">{notification.date}</p>
                      </div>
                      {!notification.isRead && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
