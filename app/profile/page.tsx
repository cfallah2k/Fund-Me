'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  Bell, 
  CreditCard, 
  Globe,
  Camera,
  Edit,
  Save,
  X,
  CheckCircle,
  AlertCircle,
  Eye,
  EyeOff
} from 'lucide-react'

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('personal')
  const [isEditing, setIsEditing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Mock user data
  const user = {
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    phone: '+234 801 234 5678',
    location: 'Lagos, Nigeria',
    userType: 'STARTUP',
    isVerified: true,
    joinDate: '2023-06-15',
    avatar: '/api/placeholder/100/100',
    bio: 'Passionate entrepreneur focused on renewable energy solutions for rural communities across Africa.',
    company: 'SolarTech Solutions',
    website: 'https://solartech.ng',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      twitter: 'https://twitter.com/sarahjohnson',
      facebook: 'https://facebook.com/sarahjohnson'
    }
  }

  // Mock form data
  const [formData, setFormData] = useState({
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: user.email,
    phone: user.phone,
    location: user.location,
    bio: user.bio,
    company: user.company,
    website: user.website,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    notifications: {
      email: true,
      push: true,
      sms: false,
      marketing: true
    },
    privacy: {
      profileVisibility: 'public',
      showEmail: false,
      showPhone: false,
      allowMessages: true
    }
  })

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'payment', label: 'Payment Methods', icon: CreditCard },
  ]

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleNotificationChange = (type: string, value: boolean) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: value
      }
    }))
  }

  const handlePrivacyChange = (type: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [type]: value
      }
    }))
  }

  const handleSave = () => {
    console.log('Saving profile data:', formData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset form data to original values
  }

  return (
    <div className="min-h-screen bg-accent-50">
      {/* Header */}
      <div className="bg-white border-b border-accent-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-accent-900">Profile Settings</h1>
              <p className="text-accent-600">Manage your account information and preferences</p>
            </div>
            {isEditing && (
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleCancel}
                  className="btn-outline"
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="btn-primary"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-accent-600">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <h2 className="text-xl font-semibold text-accent-900 mb-1">{user.name}</h2>
                <p className="text-accent-600 mb-2">{user.userType.replace('_', ' ')}</p>
                {user.isVerified && (
                  <div className="flex items-center justify-center space-x-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Verified Account</span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-accent-500" />
                  <span className="text-accent-700">{user.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-accent-500" />
                  <span className="text-accent-700">{user.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-accent-500" />
                  <span className="text-accent-700">{user.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Globe className="w-4 h-4 text-accent-500" />
                  <span className="text-accent-700">Member since {user.joinDate}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-accent-200">
                <h3 className="font-semibold text-accent-900 mb-3">Account Statistics</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-accent-600">Campaigns</p>
                    <p className="font-semibold text-accent-900">3</p>
                  </div>
                  <div>
                    <p className="text-accent-600">Investments</p>
                    <p className="font-semibold text-accent-900">8</p>
                  </div>
                  <div>
                    <p className="text-accent-600">Total Raised</p>
                    <p className="font-semibold text-accent-900">$125K</p>
                  </div>
                  <div>
                    <p className="text-accent-600">Success Rate</p>
                    <p className="font-semibold text-accent-900">95%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg">
              {/* Tabs */}
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
                {/* Personal Info Tab */}
                {activeTab === 'personal' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-accent-900">Personal Information</h3>
                      <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="btn-outline"
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-accent-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-accent-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-accent-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-accent-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-accent-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-accent-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-accent-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-accent-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-accent-700 mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-accent-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-accent-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-accent-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-accent-700 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-accent-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-accent-700 mb-2">
                        Bio
                      </label>
                      <textarea
                        value={formData.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        disabled={!isEditing}
                        rows={4}
                        className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-accent-50"
                      />
                    </div>
                  </div>
                )}

                {/* Security Tab */}
                {activeTab === 'security' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-accent-900">Security Settings</h3>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-accent-700 mb-2">
                          Current Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={formData.currentPassword}
                            onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                            className="w-full px-3 py-2 pr-10 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent-500 hover:text-accent-700"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-accent-700 mb-2">
                          New Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={formData.newPassword}
                            onChange={(e) => handleInputChange('newPassword', e.target.value)}
                            className="w-full px-3 py-2 pr-10 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent-500 hover:text-accent-700"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-accent-700 mb-2">
                          Confirm New Password
                        </label>
                        <div className="relative">
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                            className="w-full px-3 py-2 pr-10 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent-500 hover:text-accent-700"
                          >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <button className="btn-primary">
                        Update Password
                      </button>
                    </div>

                    <div className="pt-6 border-t border-accent-200">
                      <h4 className="font-semibold text-accent-900 mb-4">Privacy Settings</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-accent-900">Profile Visibility</p>
                            <p className="text-sm text-accent-600">Control who can see your profile</p>
                          </div>
                          <select
                            value={formData.privacy.profileVisibility}
                            onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                            className="px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          >
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                            <option value="friends">Friends Only</option>
                          </select>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-accent-900">Show Email</p>
                            <p className="text-sm text-accent-600">Allow others to see your email address</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.privacy.showEmail}
                              onChange={(e) => handlePrivacyChange('showEmail', e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-accent-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-accent-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-accent-900">Allow Messages</p>
                            <p className="text-sm text-accent-600">Let other users send you messages</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.privacy.allowMessages}
                              onChange={(e) => handlePrivacyChange('allowMessages', e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-accent-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-accent-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Notifications Tab */}
                {activeTab === 'notifications' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-accent-900">Notification Preferences</h3>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-accent-900">Email Notifications</p>
                          <p className="text-sm text-accent-600">Receive updates via email</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.notifications.email}
                            onChange={(e) => handleNotificationChange('email', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-accent-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-accent-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-accent-900">Push Notifications</p>
                          <p className="text-sm text-accent-600">Get real-time updates on your device</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.notifications.push}
                            onChange={(e) => handleNotificationChange('push', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-accent-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-accent-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-accent-900">SMS Notifications</p>
                          <p className="text-sm text-accent-600">Receive text message updates</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.notifications.sms}
                            onChange={(e) => handleNotificationChange('sms', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-accent-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-accent-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-accent-900">Marketing Communications</p>
                          <p className="text-sm text-accent-600">Receive promotional emails and updates</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.notifications.marketing}
                            onChange={(e) => handleNotificationChange('marketing', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-accent-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-accent-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Payment Methods Tab */}
                {activeTab === 'payment' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-accent-900">Payment Methods</h3>
                      <button className="btn-primary">
                        Add Payment Method
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div className="border border-accent-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <CreditCard className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium text-accent-900">Visa ending in 4242</p>
                              <p className="text-sm text-accent-600">Expires 12/25</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded-full">
                              Default
                            </span>
                            <button className="text-accent-600 hover:text-accent-900">
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="border border-accent-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                              <CreditCard className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium text-accent-900">Mastercard ending in 8888</p>
                              <p className="text-sm text-accent-600">Expires 08/26</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="text-accent-600 hover:text-accent-900">
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-accent-200">
                      <h4 className="font-semibold text-accent-900 mb-4">Billing Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-accent-700 mb-2">
                            Billing Address
                          </label>
                          <textarea
                            rows={3}
                            className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Enter your billing address"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-accent-700 mb-2">
                            Tax ID (Optional)
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Enter your tax ID"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
