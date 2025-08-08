'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, CheckCircle, Star, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const benefits = [
    {
      icon: CheckCircle,
      text: 'Free to start - No hidden fees',
    },
    {
      icon: Shield,
      text: 'Bank-level security & protection',
    },
    {
      icon: Star,
      text: '4.9/5 user satisfaction rating',
    },
    {
      icon: Zap,
      text: 'Instant setup & launch',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm"
            >
              <Star className="w-4 h-4 mr-2" />
              Join 50,000+ Successful Users
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Ready to Transform
              <br />
              Your Financial Future?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/90 leading-relaxed"
            >
              Whether you're raising funds for your dream project or looking to invest 
              in Africa's next big thing, Fund-Me is your gateway to success. 
              Join thousands who have already achieved their goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <benefit.icon className="w-5 h-5 text-white" />
                  <span className="text-white/90">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/auth/signup" 
                className="bg-white text-primary-600 hover:bg-accent-50 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 inline-flex items-center"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/discover" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              >
                Explore Campaigns
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Success Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center p-6 bg-white/20 rounded-xl"
                >
                  <div className="text-3xl font-bold text-white mb-2">$25M+</div>
                  <div className="text-white/80">Total Funds Raised</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-center p-6 bg-white/20 rounded-xl"
                >
                  <div className="text-3xl font-bold text-white mb-2">1,500+</div>
                  <div className="text-white/80">Successful Campaigns</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-center p-6 bg-white/20 rounded-xl"
                >
                  <div className="text-3xl font-bold text-white mb-2">98%</div>
                  <div className="text-white/80">Success Rate</div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <Star className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <CheckCircle className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 text-center"
        >
          <p className="text-white/80 mb-6">
            Trusted by leading organizations across Africa
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-white/60 text-sm">• Bank of Africa</div>
            <div className="text-white/60 text-sm">• African Development Bank</div>
            <div className="text-white/60 text-sm">• Mastercard Foundation</div>
            <div className="text-white/60 text-sm">• African Union</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
