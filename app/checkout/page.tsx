'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  CreditCard, 
  Lock, 
  Shield, 
  CheckCircle,
  AlertCircle,
  Eye,
  EyeOff,
  Calendar,
  MapPin,
  Users,
  DollarSign
} from 'lucide-react'
import Link from 'next/link'

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [showCardDetails, setShowCardDetails] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Nigeria'
  })

  // Mock campaign data from URL params
  const campaign = {
    id: '1',
    title: 'Solar Energy for Rural Communities',
    image: '/api/placeholder/400/200',
    goalAmount: 50000,
    currentAmount: 45000,
    daysLeft: 15,
    location: 'Nigeria',
    backers: 234,
    investmentAmount: 1000,
    reward: {
      title: 'Solar Panel Sponsor',
      description: 'Sponsor one solar panel and get updates on its installation',
      amount: 1000
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

  const calculateFees = () => {
    const platformFee = campaign.investmentAmount * 0.05 // 5%
    const processingFee = campaign.investmentAmount * 0.029 + 0.30 // 2.9% + $0.30
    return {
      platformFee,
      processingFee,
      total: campaign.investmentAmount + platformFee + processingFee
    }
  }

  const fees = calculateFees()

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleCardNumberChange = (value: string) => {
    // Format card number with spaces
    const formatted = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim()
    handleInputChange('cardNumber', formatted)
  }

  const handleExpiryChange = (value: string) => {
    // Format expiry date
    const formatted = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2')
    handleInputChange('expiryDate', formatted)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      // Redirect to success page or show success message
      console.log('Payment processed successfully')
    }, 2000)
  }

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Pay with Visa, Mastercard, or other major cards'
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: CreditCard,
      description: 'Direct bank transfer (2-3 business days)'
    },
    {
      id: 'mobile',
      name: 'Mobile Money',
      icon: CreditCard,
      description: 'Pay with mobile money services'
    }
  ]

  return (
    <div className="min-h-screen bg-accent-50">
      {/* Header */}
      <div className="bg-white border-b border-accent-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href={`/campaigns/${campaign.id}`}
              className="flex items-center space-x-2 text-accent-600 hover:text-accent-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Campaign</span>
            </Link>
            <div className="flex items-center space-x-2 text-accent-600">
              <Lock className="w-4 h-4" />
              <span className="text-sm">Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-accent-900 mb-2">Complete Your Investment</h1>
              <p className="text-accent-600">You're investing in a great cause. Let's get you set up.</p>
            </div>

            {/* Campaign Summary */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center">
                  <span className="text-accent-600 font-semibold">SE</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-accent-900 mb-1">{campaign.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-accent-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{campaign.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{campaign.backers} backers</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{campaign.daysLeft} days left</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-accent-900 mb-4">Payment Method</h3>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === method.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-accent-200 hover:border-accent-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-primary-600 focus:ring-primary-500"
                    />
                    <method.icon className="w-5 h-5 text-accent-600" />
                    <div className="flex-1">
                      <p className="font-medium text-accent-900">{method.name}</p>
                      <p className="text-sm text-accent-600">{method.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Payment Details */}
            {paymentMethod === 'card' && (
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-accent-900 mb-4">Card Details</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-accent-700 mb-2">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.cardNumber}
                        onChange={(e) => handleCardNumberChange(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full px-3 py-2 pr-10 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowCardDetails(!showCardDetails)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent-500 hover:text-accent-700"
                      >
                        {showCardDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-accent-700 mb-2">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        value={formData.cardHolder}
                        onChange={(e) => handleInputChange('cardHolder', e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-accent-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        value={formData.expiryDate}
                        onChange={(e) => handleExpiryChange(e.target.value)}
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-accent-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={formData.cvv}
                      onChange={(e) => handleInputChange('cvv', e.target.value)}
                      placeholder="123"
                      maxLength={4}
                      className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-accent-700 mb-2">
                      Billing Address
                    </label>
                    <textarea
                      value={formData.billingAddress}
                      onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                      placeholder="Enter your billing address"
                      rows={3}
                      className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-accent-700 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        placeholder="Lagos"
                        className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-accent-700 mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        placeholder="Lagos"
                        className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-accent-700 mb-2">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        placeholder="100001"
                        className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
            )}

            {/* Security Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-900">Secure Payment</p>
                  <p className="text-sm text-blue-700 mt-1">
                    Your payment information is encrypted and secure. We use industry-standard SSL encryption to protect your data.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-accent-900 mb-4">Order Summary</h3>
              
              <div className="space-y-4">
                {/* Investment Details */}
                <div className="border-b border-accent-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-accent-600">Investment Amount</span>
                    <span className="font-semibold text-accent-900">{formatCurrency(campaign.investmentAmount)}</span>
                  </div>
                  {campaign.reward && (
                    <div className="text-sm text-accent-600">
                      Reward: {campaign.reward.title}
                    </div>
                  )}
                </div>

                {/* Fees */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-accent-600">Platform Fee (5%)</span>
                    <span className="text-accent-900">{formatCurrency(fees.platformFee)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-accent-600">Payment Processing (2.9% + $0.30)</span>
                    <span className="text-accent-900">{formatCurrency(fees.processingFee)}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-accent-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-accent-900">Total</span>
                    <span className="text-xl font-bold text-primary-600">{formatCurrency(fees.total)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-accent-900 mb-4">Terms & Conditions</h3>
              <div className="space-y-3 text-sm text-accent-600">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Your investment is protected by our secure payment system</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>You can track your investment progress in your dashboard</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Funds are held securely until campaign completion</span>
                </div>
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                  <span>Investments are subject to campaign success. If the campaign doesn't reach its goal, funds may be returned.</span>
                </div>
              </div>
            </div>

            {/* Complete Investment Button */}
            <button
              onClick={handleSubmit}
              disabled={isProcessing}
              className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing Payment...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <Lock className="w-5 h-5" />
                  <span>Complete Investment</span>
                </div>
              )}
            </button>

            {/* Additional Info */}
            <div className="text-center text-sm text-accent-600">
              <p>By completing this investment, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
