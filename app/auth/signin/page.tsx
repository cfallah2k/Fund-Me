'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Eye, EyeOff, Mail, Lock, ArrowRight, Facebook, Twitter, Google } from 'lucide-react'

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign in logic
    console.log('Sign in:', formData)
  }

  const handleSocialLogin = (provider: string) => {
    // Handle social login
    console.log('Social login:', provider)
  }

  return (
    <div className="min-h-screen bg-accent-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold text-accent-900">Fund-Me</span>
            </Link>
          </div>
          <h2 className="text-3xl font-bold text-accent-900 mb-2">
            Welcome Back
          </h2>
          <p className="text-accent-600">
            Sign in to your account to continue
          </p>
        </motion.div>

        {/* Social Login */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <button
            onClick={() => handleSocialLogin('google')}
            className="w-full flex items-center justify-center space-x-3 px-4 py-3 border border-accent-300 rounded-lg bg-white text-accent-700 hover:bg-accent-50 transition-colors duration-200"
          >
            <Google className="w-5 h-5" />
            <span>Continue with Google</span>
          </button>

          <div className="flex space-x-4">
            <button
              onClick={() => handleSocialLogin('facebook')}
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 border border-accent-300 rounded-lg bg-white text-accent-700 hover:bg-accent-50 transition-colors duration-200"
            >
              <Facebook className="w-5 h-5" />
              <span className="hidden sm:inline">Facebook</span>
            </button>
            <button
              onClick={() => handleSocialLogin('twitter')}
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 border border-accent-300 rounded-lg bg-white text-accent-700 hover:bg-accent-50 transition-colors duration-200"
            >
              <Twitter className="w-5 h-5" />
              <span className="hidden sm:inline">Twitter</span>
            </button>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-accent-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-accent-50 text-accent-500">Or continue with</span>
          </div>
        </motion.div>

        {/* Sign In Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-accent-700 mb-2">
              Email Address
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
            <label htmlFor="password" className="block text-sm font-medium text-accent-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-400 w-5 h-5" />
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent-400 hover:text-accent-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.rememberMe}
                onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                className="w-4 h-4 text-primary-600 border-accent-300 rounded focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-accent-700">Remember me</span>
            </label>
            <Link
              href="/auth/forgot-password"
              className="text-sm text-primary-600 hover:text-primary-700 transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full btn-primary flex items-center justify-center space-x-2"
          >
            <span>Sign In</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.form>

        {/* Sign Up Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-accent-600">
            Don't have an account?{' '}
            <Link
              href="/auth/signup"
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              Sign up for free
            </Link>
          </p>
        </motion.div>

        {/* Additional Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center space-y-2"
        >
          <p className="text-xs text-accent-500">
            By signing in, you agree to our{' '}
            <Link href="/terms" className="text-primary-600 hover:text-primary-700">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-primary-600 hover:text-primary-700">
              Privacy Policy
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default SignInPage
