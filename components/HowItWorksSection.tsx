'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  UserPlus, 
  Target, 
  Share2, 
  TrendingUp,
  Search,
  Users,
  DollarSign,
  CheckCircle
} from 'lucide-react'

const HowItWorksSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fundraiserSteps = [
    {
      icon: UserPlus,
      title: 'Create Your Profile',
      description: 'Sign up and build your profile. Share your story, goals, and what makes your project unique.',
      step: '1',
    },
    {
      icon: Target,
      title: 'Set Your Goal',
      description: 'Define your funding goal, timeline, and what you\'ll offer to your backers.',
      step: '2',
    },
    {
      icon: Share2,
      title: 'Launch Your Campaign',
      description: 'Share your campaign with the world. Use our tools to reach potential investors and donors.',
      step: '3',
    },
    {
      icon: TrendingUp,
      title: 'Track & Grow',
      description: 'Monitor your progress, engage with your community, and watch your dreams come to life.',
      step: '4',
    },
  ]

  const investorSteps = [
    {
      icon: Search,
      title: 'Discover Opportunities',
      description: 'Browse through thousands of campaigns across different categories and investment types.',
      step: '1',
    },
    {
      icon: Users,
      title: 'Connect & Research',
      description: 'Connect with entrepreneurs, ask questions, and conduct due diligence on projects.',
      step: '2',
    },
    {
      icon: DollarSign,
      title: 'Invest Securely',
      description: 'Make secure investments through our integrated payment system with full transparency.',
      step: '3',
    },
    {
      icon: CheckCircle,
      title: 'Track Returns',
      description: 'Monitor your investments, receive updates, and track your portfolio performance.',
      step: '4',
    },
  ]

  return (
    <section className="py-20 bg-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-accent-900 mb-4">
            How Fund-Me Works
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            Whether you're raising funds or looking to invest, our platform makes it simple 
            and secure to achieve your financial goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* For Fundraisers */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <UserPlus className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-accent-900 mb-2">
                For Fundraisers
              </h3>
              <p className="text-accent-600">
                Turn your ideas into reality with our comprehensive fundraising tools.
              </p>
            </div>

            <div className="space-y-8">
              {fundraiserSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <step.icon className="w-5 h-5 text-primary-600" />
                      <h4 className="text-lg font-semibold text-accent-900">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-accent-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* For Investors */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-4">
                <Search className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold text-accent-900 mb-2">
                For Investors
              </h3>
              <p className="text-accent-600">
                Discover and invest in Africa's most promising opportunities.
              </p>
            </div>

            <div className="space-y-8">
              {investorSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <step.icon className="w-5 h-5 text-secondary-600" />
                      <h4 className="text-lg font-semibold text-accent-900">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-accent-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Success Stories Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-white rounded-2xl shadow-lg p-8 border border-accent-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-accent-900 mb-4">
              Success Stories
            </h3>
            <p className="text-accent-600 max-w-2xl mx-auto">
              See how Fund-Me has helped entrepreneurs and organizations achieve their goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-primary-50 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 mb-2">$2.5M</div>
              <div className="text-accent-600">Solar Energy Project</div>
              <div className="text-sm text-accent-500 mt-2">Fully funded in 45 days</div>
            </div>
            <div className="text-center p-6 bg-secondary-50 rounded-xl">
              <div className="text-3xl font-bold text-secondary-600 mb-2">$1.8M</div>
              <div className="text-accent-600">Tech Startup</div>
              <div className="text-sm text-accent-500 mt-2">Equity offering successful</div>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 mb-2">$500K</div>
              <div className="text-accent-600">Education Fund</div>
              <div className="text-sm text-accent-500 mt-2">500+ students supported</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSection
