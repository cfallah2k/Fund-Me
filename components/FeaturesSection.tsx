'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Globe, 
  Users, 
  Shield, 
  TrendingUp, 
  Smartphone, 
  Zap,
  Heart,
  Building,
  Lightbulb,
  Target,
  MessageCircle,
  BarChart3
} from 'lucide-react'

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with investors and donors from across Africa and beyond. Our platform spans 25+ countries.',
      color: 'primary',
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Build a community around your cause. Engage with backers, share updates, and create lasting relationships.',
      color: 'secondary',
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Bank-level security with Stripe integration. Your funds and data are protected with the highest standards.',
      color: 'primary',
    },
    {
      icon: TrendingUp,
      title: 'AI-Powered Matching',
      description: 'Our advanced algorithms match you with the right investors based on your project type and goals.',
      color: 'secondary',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Access Fund-Me anywhere, anytime. Our responsive platform works seamlessly on all devices.',
      color: 'primary',
    },
    {
      icon: Zap,
      title: 'Instant Payments',
      description: 'Receive funds instantly with our integrated payment system. No waiting, no delays.',
      color: 'secondary',
    },
    {
      icon: Heart,
      title: 'Social Impact',
      description: 'Support causes that matter. From education to healthcare, make a difference in communities.',
      color: 'primary',
    },
    {
      icon: Building,
      title: 'Startup Support',
      description: 'Comprehensive tools for startups including equity offerings, investor relations, and growth tracking.',
      color: 'secondary',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Discover groundbreaking ideas and innovative projects from Africa\'s brightest entrepreneurs.',
      color: 'primary',
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Real-time progress tracking with detailed analytics. Know exactly how close you are to your goals.',
      color: 'secondary',
    },
    {
      icon: MessageCircle,
      title: 'Direct Communication',
      description: 'Connect directly with investors and donors. Build relationships that last beyond the campaign.',
      color: 'primary',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into your campaign performance with detailed reports and metrics.',
      color: 'secondary',
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-100 text-primary-600'
      case 'secondary':
        return 'bg-secondary-100 text-secondary-600'
      default:
        return 'bg-accent-100 text-accent-600'
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-accent-900 mb-4">
            Why Choose Fund-Me?
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            We've built the most comprehensive fundraising platform in Africa, combining 
            crowdfunding, venture funding, and networking in one seamless experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card h-full group-hover:shadow-2xl transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${getColorClasses(feature.color)} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-accent-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-accent-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-200">
            <h3 className="text-2xl font-bold text-accent-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-accent-600 mb-6 max-w-2xl mx-auto">
              Join thousands of successful fundraisers who have achieved their goals with Fund-Me.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Your Campaign
              </button>
              <button className="btn-outline">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
