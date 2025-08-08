'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Bell, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  DollarSign,
  Users,
  TrendingUp,
  Star,
  Filter,
  Check,
  X,
  Trash2,
  Settings
} from 'lucide-react'

const NotificationsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedNotifications, setSelectedNotifications] = useState<string[]>([])

  // Mock notifications data
  const notifications = [
    {
      id: '1',
      type: 'success',
      title: 'Campaign Update',
      message: 'Your campaign "Solar Energy for Rural Communities" has reached 90% of its goal!',
      timestamp: '2 hours ago',
      isRead: false,
      campaignId: '1',
      icon: TrendingUp
    },
    {
      id: '2',
      type: 'investment',
      title: 'New Investment',
      message: 'You received a $2,500 investment in your AI Healthcare Platform campaign.',
      timestamp: '4 hours ago',
      isRead: true,
      campaignId: '2',
      icon: DollarSign
    },
    {
      id: '3',
      type: 'warning',
      title: 'Campaign Ending Soon',
      message: 'Your "Education Fund for Orphans" campaign ends in 7 days. Consider extending the deadline.',
      timestamp: '6 hours ago',
      isRead: false,
      campaignId: '3',
      icon: AlertCircle
    },
    {
      id: '4',
      type: 'info',
      title: 'Platform Update',
      message: 'New features have been added to your dashboard. Check out the improved analytics.',
      timestamp: '1 day ago',
      isRead: true,
      campaignId: null,
      icon: Info
    },
    {
      id: '5',
      type: 'success',
      title: 'Investment Return',
      message: 'You received a 12.5% return on your AgriTech investment!',
      timestamp: '2 days ago',
      isRead: true,
      campaignId: '4',
      icon: CheckCircle
    },
    {
      id: '6',
      type: 'investment',
      title: 'New Backer',
      message: 'Michael Chen backed your Solar Energy campaign with $1,000.',
      timestamp: '3 days ago',
      isRead: true,
      campaignId: '1',
      icon: Users
    },
    {
      id: '7',
      type: 'warning',
      title: 'Payment Failed',
      message: 'A payment of $500 for your campaign has failed. Please check your payment settings.',
      timestamp: '4 days ago',
      isRead: false,
      campaignId: '2',
      icon: AlertCircle
    },
    {
      id: '8',
      type: 'info',
      title: 'Verification Complete',
      message: 'Your account verification has been completed successfully.',
      timestamp: '5 days ago',
      isRead: true,
      campaignId: null,
      icon: CheckCircle
    }
  ]

  const filters = [
    { id: 'all', label: 'All Notifications', count: notifications.length },
    { id: 'unread', label: 'Unread', count: notifications.filter(n => !n.isRead).length },
    { id: 'success', label: 'Success', count: notifications.filter(n => n.type === 'success').length },
    { id: 'investment', label: 'Investments', count: notifications.filter(n => n.type === 'investment').length },
    { id: 'warning', label: 'Warnings', count: notifications.filter(n => n.type === 'warning').length },
    { id: 'info', label: 'Info', count: notifications.filter(n => n.type === 'info').length }
  ]

  const getFilteredNotifications = () => {
    if (activeFilter === 'all') return notifications
    if (activeFilter === 'unread') return notifications.filter(n => !n.isRead)
    return notifications.filter(n => n.type === activeFilter)
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-orange-600" />
      case 'investment':
        return <DollarSign className="w-5 h-5 text-blue-600" />
      case 'info':
        return <Info className="w-5 h-5 text-purple-600" />
      default:
        return <Bell className="w-5 h-5 text-accent-600" />
    }
  }

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'border-green-200 bg-green-50'
      case 'warning':
        return 'border-orange-200 bg-orange-50'
      case 'investment':
        return 'border-blue-200 bg-blue-50'
      case 'info':
        return 'border-purple-200 bg-purple-50'
      default:
        return 'border-accent-200 bg-accent-50'
    }
  }

  const toggleNotificationSelection = (id: string) => {
    setSelectedNotifications(prev => 
      prev.includes(id) 
        ? prev.filter(n => n !== id)
        : [...prev, id]
    )
  }

  const markAsRead = (id: string) => {
    console.log('Marking notification as read:', id)
  }

  const deleteNotifications = () => {
    console.log('Deleting notifications:', selectedNotifications)
    setSelectedNotifications([])
  }

  const markAllAsRead = () => {
    console.log('Marking all notifications as read')
  }

  return (
    <div className="min-h-screen bg-accent-50">
      {/* Header */}
      <div className="bg-white border-b border-accent-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-accent-900 mb-2">Notifications</h1>
              <p className="text-accent-600">Stay updated with your campaign and investment activities</p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={markAllAsRead}
                className="btn-outline"
              >
                Mark All as Read
              </button>
              <button className="p-2 text-accent-600 hover:text-accent-900 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
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
                <span className="ml-2 px-2 py-1 bg-accent-200 text-accent-600 text-xs rounded-full">
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Bulk Actions */}
        {selectedNotifications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-4 shadow-lg mb-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-accent-600">
                {selectedNotifications.length} notification(s) selected
              </span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={deleteNotifications}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="text-sm">Delete</span>
                </button>
                <button
                  onClick={() => setSelectedNotifications([])}
                  className="flex items-center space-x-2 text-accent-600 hover:text-accent-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span className="text-sm">Cancel</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Notifications List */}
        <div className="space-y-4">
          {getFilteredNotifications().map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg border-2 transition-all ${
                selectedNotifications.includes(notification.id)
                  ? 'border-primary-500 bg-primary-50'
                  : getNotificationColor(notification.type)
              }`}
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    checked={selectedNotifications.includes(notification.id)}
                    onChange={() => toggleNotificationSelection(notification.id)}
                    className="mt-1 w-4 h-4 text-primary-600 border-accent-300 rounded focus:ring-primary-500"
                  />
                  
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    {getNotificationIcon(notification.type)}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-accent-900">{notification.title}</h3>
                      <div className="flex items-center space-x-2">
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        )}
                        <span className="text-sm text-accent-500">{notification.timestamp}</span>
                      </div>
                    </div>
                    <p className="text-accent-700 mb-3">{notification.message}</p>
                    
                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                      {!notification.isRead && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="flex items-center space-x-1 text-sm text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          <Check className="w-3 h-3" />
                          <span>Mark as read</span>
                        </button>
                      )}
                      {notification.campaignId && (
                        <a
                          href={`/campaigns/${notification.campaignId}`}
                          className="flex items-center space-x-1 text-sm text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          <span>View Campaign</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {getFilteredNotifications().length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <Bell className="w-16 h-16 text-accent-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-accent-900 mb-2">No notifications</h3>
            <p className="text-accent-600">
              {activeFilter === 'all' 
                ? 'You\'re all caught up! No new notifications at the moment.'
                : `No ${activeFilter} notifications found.`
              }
            </p>
          </motion.div>
        )}

        {/* Load More */}
        {getFilteredNotifications().length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <button className="btn-outline">
              Load More Notifications
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default NotificationsPage
