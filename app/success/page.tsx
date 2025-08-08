'use client'

import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  ArrowRight, 
  Share2, 
  Download, 
  Mail,
  Calendar,
  DollarSign,
  Users,
  MapPin,
  Heart
} from 'lucide-react'
import Link from 'next/link'

const SuccessPage = () => {
  // Mock transaction data
  const transaction = {
    id: 'TXN-2024-001',
    amount: 1000,
    campaignTitle: 'Solar Energy for Rural Communities',
    campaignId: '1',
    date: '2024-01-15',
    status: 'COMPLETED',
    reward: {
      title: 'Solar Panel Sponsor',
      description: 'Sponsor one solar panel and get updates on its installation'
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'I just invested in a great cause!',
        text: `I just invested ${formatCurrency(transaction.amount)} in ${transaction.campaignTitle} on Fund-Me. Join me in making a difference!`,
        url: window.location.origin
      })
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(`${window.location.origin}/campaigns/${transaction.campaignId}`)
    }
  }

  const handleDownloadReceipt = () => {
    // Generate and download receipt
    console.log('Downloading receipt...')
  }

  return (
    <div className="min-h-screen bg-accent-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-accent-900 mb-4">
            Investment Successful!
          </h1>
          <p className="text-lg text-accent-600 max-w-2xl mx-auto">
            Thank you for your investment! Your contribution will help make a real difference in this project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Transaction Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-xl font-semibold text-accent-900 mb-6">Transaction Details</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-accent-200">
                  <span className="text-accent-600">Transaction ID</span>
                  <span className="font-mono text-accent-900">{transaction.id}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-accent-200">
                  <span className="text-accent-600">Amount</span>
                  <span className="font-semibold text-accent-900">{formatCurrency(transaction.amount)}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-accent-200">
                  <span className="text-accent-600">Date</span>
                  <span className="text-accent-900">{transaction.date}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-accent-200">
                  <span className="text-accent-600">Status</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                    {transaction.status}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-accent-600">Campaign</span>
                  <span className="text-accent-900 text-right">{transaction.campaignTitle}</span>
                </div>
              </div>
            </motion.div>

            {/* Campaign Update */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-xl font-semibold text-accent-900 mb-6">Campaign Update</h2>
              
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center">
                  <span className="text-accent-600 font-semibold">SE</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-accent-900 mb-2">{transaction.campaignTitle}</h3>
                  <div className="flex items-center space-x-4 text-sm text-accent-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>Nigeria</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>235 backers</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>14 days left</span>
                    </div>
                  </div>
                  <div className="w-full bg-accent-200 rounded-full h-2 mb-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm text-accent-600">
                    <span>92% funded</span>
                    <span>$46,000 of $50,000</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Reward Details */}
            {transaction.reward && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h2 className="text-xl font-semibold text-accent-900 mb-6">Your Reward</h2>
                
                <div className="border border-accent-200 rounded-lg p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-accent-900 mb-2">{transaction.reward.title}</h3>
                      <p className="text-accent-600 mb-4">{transaction.reward.description}</p>
                      <div className="flex items-center space-x-2 text-sm text-accent-600">
                        <Calendar className="w-4 h-4" />
                        <span>Estimated delivery: March 2024</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                        Confirmed
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-xl font-semibold text-accent-900 mb-6">What's Next?</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-accent-900 mb-1">Track Your Investment</h3>
                    <p className="text-sm text-accent-600">
                      Monitor your investment progress and campaign updates in your dashboard.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-accent-900 mb-1">Receive Updates</h3>
                    <p className="text-sm text-accent-600">
                      Get email notifications about campaign progress and important milestones.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-accent-900 mb-1">Share Your Support</h3>
                    <p className="text-sm text-accent-600">
                      Tell your friends and family about this great cause and encourage them to join.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-accent-900 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <Link
                  href="/dashboard"
                  className="flex items-center space-x-3 p-3 border border-accent-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="font-medium text-accent-900">View Dashboard</p>
                    <p className="text-sm text-accent-600">Track your investments</p>
                  </div>
                </Link>
                
                <button
                  onClick={handleShare}
                  className="w-full flex items-center space-x-3 p-3 border border-accent-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
                >
                  <Share2 className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="font-medium text-accent-900">Share Campaign</p>
                    <p className="text-sm text-accent-600">Tell others about this cause</p>
                  </div>
                </button>
                
                <button
                  onClick={handleDownloadReceipt}
                  className="w-full flex items-center space-x-3 p-3 border border-accent-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
                >
                  <Download className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="font-medium text-accent-900">Download Receipt</p>
                    <p className="text-sm text-accent-600">Save for your records</p>
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-accent-900 mb-4">Need Help?</h3>
              
              <div className="space-y-3">
                <Link
                  href="/support"
                  className="flex items-center space-x-3 p-3 text-accent-600 hover:text-accent-900 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">Contact Support</span>
                </Link>
                
                <Link
                  href="/faq"
                  className="flex items-center space-x-3 p-3 text-accent-600 hover:text-accent-900 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">FAQ</span>
                </Link>
              </div>
            </motion.div>

            {/* Impact Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl p-6 text-white"
            >
              <h3 className="text-lg font-semibold mb-4">Your Impact</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">Investment Amount</span>
                  <span className="font-semibold">{formatCurrency(transaction.amount)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">Campaign Progress</span>
                  <span className="font-semibold">92%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">Total Backers</span>
                  <span className="font-semibold">235</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">Thank you for making a difference!</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessPage
