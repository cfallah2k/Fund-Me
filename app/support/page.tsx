'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  MapPin,
  Send,
  FileText,
  HelpCircle,
  Shield,
  Users,
  CheckCircle,
  AlertCircle,
  Star
} from 'lucide-react'

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState('contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  })

  const supportCategories = [
    { id: 'general', label: 'General Inquiry' },
    { id: 'technical', label: 'Technical Support' },
    { id: 'billing', label: 'Billing & Payments' },
    { id: 'campaign', label: 'Campaign Support' },
    { id: 'investment', label: 'Investment Issues' },
    { id: 'security', label: 'Security Concerns' },
    { id: 'legal', label: 'Legal & Compliance' },
  ]

  const contactMethods = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: 'Instant',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      availability: '24/7',
      responseTime: 'Within 24 hours',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our team',
      icon: Phone,
      availability: 'Mon-Fri, 9AM-6PM WAT',
      responseTime: 'Immediate',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ]

  const helpResources = [
    {
      title: 'Help Center',
      description: 'Comprehensive guides and tutorials',
      icon: HelpCircle,
      link: '/faq'
    },
    {
      title: 'Documentation',
      description: 'Detailed platform documentation',
      icon: FileText,
      link: '/docs'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users',
      icon: Users,
      link: '/community'
    },
    {
      title: 'Security Center',
      description: 'Learn about our security measures',
      icon: Shield,
      link: '/security'
    }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitting support request:', formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-accent-50">
      {/* Header */}
      <div className="bg-white border-b border-accent-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-accent-900 mb-4">
              Support Center
            </h1>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto">
              We're here to help! Get in touch with our support team or explore our resources to find the answers you need.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-accent-900 mb-6">Get In Touch</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-6 border border-accent-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all"
                  >
                    <div className={`w-12 h-12 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <method.icon className={`w-6 h-6 ${method.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-accent-900 mb-2">{method.title}</h3>
                    <p className="text-sm text-accent-600 mb-4">{method.description}</p>
                    <div className="space-y-2 text-xs text-accent-500">
                      <div className="flex items-center justify-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{method.availability}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>{method.responseTime}</span>
                      </div>
                    </div>
                    <button className="btn-primary w-full mt-4">
                      {method.title === 'Live Chat' ? 'Start Chat' : 'Contact Us'}
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-accent-900 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-accent-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-accent-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-accent-700 mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    {supportCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-accent-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-accent-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={6}
                    className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Please describe your issue or question in detail..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Help Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-accent-900 mb-6">Help Resources</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {helpResources.map((resource, index) => (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-start space-x-4 p-4 border border-accent-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <resource.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-accent-900 mb-1">{resource.title}</h3>
                      <p className="text-sm text-accent-600 mb-2">{resource.description}</p>
                      <a href={resource.link} className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        Learn More →
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-accent-900 mb-4">Support Stats</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-accent-600">Average Response Time</span>
                  <span className="font-semibold text-accent-900">2.5 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-600">Customer Satisfaction</span>
                  <span className="font-semibold text-accent-900">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-600">Support Tickets Resolved</span>
                  <span className="font-semibold text-accent-900">15,000+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-600">Active Support Team</span>
                  <span className="font-semibold text-accent-900">25 members</span>
                </div>
              </div>
            </motion.div>

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-accent-900 mb-4">Office Hours</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-accent-600">Monday - Friday</span>
                  <span className="font-semibold text-accent-900">9AM - 6PM WAT</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-600">Saturday</span>
                  <span className="font-semibold text-accent-900">10AM - 4PM WAT</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-600">Sunday</span>
                  <span className="font-semibold text-accent-900">Closed</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-accent-200">
                <div className="flex items-center space-x-2 text-sm text-accent-600">
                  <AlertCircle className="w-4 h-4" />
                  <span>Emergency support available 24/7</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-accent-900 mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="font-medium text-accent-900">Email</p>
                    <p className="text-sm text-accent-600">support@fund-me.africa</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="font-medium text-accent-900">Phone</p>
                    <p className="text-sm text-accent-600">+234 801 234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="font-medium text-accent-900">Address</p>
                    <p className="text-sm text-accent-600">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Customer Reviews */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl p-6 text-white"
            >
              <h3 className="text-lg font-semibold mb-4">What Our Users Say</h3>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm opacity-90">
                    "Amazing support team! They helped me resolve my campaign issue within hours."
                  </p>
                  <p className="text-xs opacity-75 mt-2">- Sarah K., Fundraiser</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm opacity-90">
                    "Professional and knowledgeable support. They really know their platform."
                  </p>
                  <p className="text-xs opacity-75 mt-2">- Michael T., Investor</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportPage
