'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, Facebook, Twitter, Globe, CheckCircle } from 'lucide-react'

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [selectedUserType, setSelectedUserType] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: '',
    agreeToTerms: false,
    agreeToMarketing: false,
  })

  const userTypes = [
    {
      value: 'INDIVIDUAL',
      label: 'Individual',
      description: 'Personal fundraising and donations',
      icon: '👤',
    },
    {
      value: 'STARTUP',
      label: 'Startup',
      description: 'Early-stage business seeking funding',
      icon: '🚀',
    },
    {
      value: 'BUSINESS',
      label: 'Business',
      description: 'Established business seeking growth',
      icon: '🏢',
    },
    {
      value: 'NGO',
      label: 'NGO',
      description: 'Non-profit organization',
      icon: '🤝',
    },
    {
      value: 'INVESTOR',
      label: 'Investor',
      description: 'Looking to invest in projects',
      icon: '💰',
    },
  ]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleUserTypeSelect = (userType: string) => {
    setSelectedUserType(userType)
    handleInputChange('userType', userType)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign up logic
    console.log('Sign up:', formData)
  }

  const handleSocialSignUp = (provider: string) => {
    // Handle social sign up
    console.log('Social sign up:', provider)
  }

  const isPasswordValid = (password: string) => {
    const minLength = password.length >= 8
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasNumbers = /\d/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    
    return { minLength, hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChar }
  }

  const passwordValidation = isPasswordValid(formData.password)
  const isPasswordStrong = Object.values(passwordValidation).every(Boolean)

  return (
    <div className="min-h-screen bg-accent-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold text-accent-900">Fund-Me</span>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-accent-900 mb-2">
            Join Fund-Me Today
          </h1>
          <p className="text-accent-600">
            Create your account and start your fundraising journey
          </p>
        </motion.div>

        {/* User Type Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-lg font-semibold text-accent-900 mb-4">
            I am a...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {userTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => handleUserTypeSelect(type.value)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                  selectedUserType === type.value
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-accent-200 bg-white hover:border-accent-300'
                }`}
              >
                <div className="text-2xl mb-2">{type.icon}</div>
                <div className="font-semibold text-accent-900 mb-1">
                  {type.label}
                </div>
                <div className="text-sm text-accent-600">
                  {type.description}
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Social Sign Up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="space-y-4">
            <button
              onClick={() => handleSocialSignUp('google')}
              className="w-full flex items-center justify-center space-x-3 px-4 py-3 border border-accent-300 rounded-lg bg-white text-accent-700 hover:bg-accent-50 transition-colors duration-200"
            >
                              <Globe className="w-5 h-5" />
              <span>Continue with Google</span>
            </button>

            <div className="flex space-x-4">
              <button
                onClick={() => handleSocialSignUp('facebook')}
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 border border-accent-300 rounded-lg bg-white text-accent-700 hover:bg-accent-50 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
                <span className="hidden sm:inline">Facebook</span>
              </button>
              <button
                onClick={() => handleSocialSignUp('twitter')}
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 border border-accent-300 rounded-lg bg-white text-accent-700 hover:bg-accent-50 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
                <span className="hidden sm:inline">Twitter</span>
              </button>
            </div>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-accent-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-accent-50 text-accent-500">Or sign up with email</span>
            </div>
          </div>
        </motion.div>

        {/* Sign Up Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-accent-700 mb-2">
                First Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-400 w-5 h-5" />
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                  placeholder="Enter your first name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-accent-700 mb-2">
                Last Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-400 w-5 h-5" />
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-accent-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-400 w-5 h-5" />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-accent-700 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-400 w-5 h-5" />
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-accent-700 mb-2">
              Password *
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-400 w-5 h-5" />
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                placeholder="Create a strong password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent-400 hover:text-accent-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            
            {/* Password Strength Indicator */}
            {formData.password && (
              <div className="mt-3 space-y-2">
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    passwordValidation.minLength ? 'bg-green-500' : 'bg-accent-300'
                  }`} />
                  <span className="text-xs text-accent-600">At least 8 characters</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    passwordValidation.hasUpperCase ? 'bg-green-500' : 'bg-accent-300'
                  }`} />
                  <span className="text-xs text-accent-600">One uppercase letter</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    passwordValidation.hasLowerCase ? 'bg-green-500' : 'bg-accent-300'
                  }`} />
                  <span className="text-xs text-accent-600">One lowercase letter</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    passwordValidation.hasNumbers ? 'bg-green-500' : 'bg-accent-300'
                  }`} />
                  <span className="text-xs text-accent-600">One number</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    passwordValidation.hasSpecialChar ? 'bg-green-500' : 'bg-accent-300'
                  }`} />
                  <span className="text-xs text-accent-600">One special character</span>
                </div>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-accent-700 mb-2">
              Confirm Password *
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-400 w-5 h-5" />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                required
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                placeholder="Confirm your password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent-400 hover:text-accent-600 transition-colors"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {formData.confirmPassword && formData.password !== formData.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
            )}
          </div>

          <div className="space-y-4">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                className="w-4 h-4 text-primary-600 border-accent-300 rounded focus:ring-primary-500 mt-1"
                required
              />
              <span className="text-sm text-accent-700">
                I agree to the{' '}
                <Link href="/terms" className="text-primary-600 hover:text-primary-700">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-primary-600 hover:text-primary-700">
                  Privacy Policy
                </Link>
                *
              </span>
            </label>

            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={formData.agreeToMarketing}
                onChange={(e) => handleInputChange('agreeToMarketing', e.target.checked)}
                className="w-4 h-4 text-primary-600 border-accent-300 rounded focus:ring-primary-500 mt-1"
              />
              <span className="text-sm text-accent-700">
                I agree to receive marketing communications from Fund-Me (optional)
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={!formData.agreeToTerms || !isPasswordStrong || formData.password !== formData.confirmPassword}
            className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Create Account</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.form>

        {/* Sign In Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-accent-600">
            Already have an account?{' '}
            <Link
              href="/auth/signin"
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              Sign in here
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default SignUpPage
