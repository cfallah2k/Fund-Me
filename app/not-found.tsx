'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Search, ArrowLeft, HelpCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
            <div className="w-64 h-32 mx-auto bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
              <div className="text-6xl">🔍</div>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Oops! Page not found
          </h1>
          
          <p className="text-gray-600 mb-8 text-lg">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track!
          </p>

          {/* Action Buttons */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            
            <Link
              href="/discover"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              <Search className="w-5 h-5 mr-2" />
              Browse Campaigns
            </Link>
          </div>

          {/* Popular Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Popular pages
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Link href="/categories" className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                Browse Categories
              </Link>
              <Link href="/success-stories" className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                Success Stories
              </Link>
              <Link href="/about" className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                About Us
              </Link>
              <Link href="/help" className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                Help Center
              </Link>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-center text-blue-700 mb-2">
              <HelpCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">Still need help?</span>
            </div>
            <p className="text-blue-600 text-sm mb-3">
              If you think this is a mistake, please let us know.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              Contact Support
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
