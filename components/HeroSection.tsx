'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, TrendingUp, Users, Globe } from 'lucide-react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Africa's #1 Crowdfunding Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-6xl font-bold text-accent-900 leading-tight"
            >
              Revolutionize
              <span className="text-primary-600"> Fundraising</span>
              <br />
              Across Africa
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-accent-600 leading-relaxed"
            >
              Fund-Me is Africa's leading integrated fundraising platform. Whether you're a student, 
              entrepreneur, startup, or NGO, we provide the tools to raise funds, offer equity, 
              and connect with investors across the continent.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/campaigns/new" className="btn-primary inline-flex items-center">
                Start Your Campaign
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/discover" className="btn-outline inline-flex items-center">
                Discover Projects
                <Play className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-8 pt-8"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary-600" />
                </div>
                <span className="text-sm text-accent-600">50K+ Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center">
                  <Globe className="w-4 h-4 text-secondary-600" />
                </div>
                <span className="text-sm text-accent-600">25+ Countries</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-accent-200">
              {/* Mock Campaign Cards */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-white"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Solar Energy Project</h3>
                    <span className="text-primary-100 text-sm">Featured</span>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Raised</span>
                      <span>$45,000 / $50,000</span>
                    </div>
                    <div className="w-full bg-primary-400 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>90% Funded</span>
                    <span>15 days left</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="bg-white border border-accent-200 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-accent-900">Tech Startup</h3>
                    <span className="text-secondary-600 text-sm font-medium">Equity</span>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Investment</span>
                      <span>$120,000 / $200,000</span>
                    </div>
                    <div className="w-full bg-accent-200 rounded-full h-2">
                      <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-accent-600">
                    <span>60% Funded</span>
                    <span>30 days left</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="bg-white border border-accent-200 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-accent-900">Education Fund</h3>
                    <span className="text-primary-600 text-sm font-medium">Crowdfunding</span>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Raised</span>
                      <span>$8,500 / $10,000</span>
                    </div>
                    <div className="w-full bg-accent-200 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-accent-600">
                    <span>85% Funded</span>
                    <span>7 days left</span>
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center"
              >
                <TrendingUp className="w-6 h-6 text-secondary-600" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center"
              >
                <Users className="w-5 h-5 text-primary-600" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
