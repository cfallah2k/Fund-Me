'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { DollarSign, Users, Globe, TrendingUp } from 'lucide-react'

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      icon: DollarSign,
      value: 25,
      suffix: 'M',
      label: 'Total Raised',
      description: 'USD across all campaigns',
      color: 'primary',
    },
    {
      icon: Users,
      value: 50000,
      suffix: '+',
      label: 'Active Users',
      description: 'Across 25+ countries',
      color: 'secondary',
    },
    {
      icon: Globe,
      value: 1500,
      suffix: '+',
      label: 'Successful Campaigns',
      description: 'With 85% success rate',
      color: 'primary',
    },
    {
      icon: TrendingUp,
      value: 95,
      suffix: '%',
      label: 'Satisfaction Rate',
      description: 'User satisfaction score',
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
            Fund-Me by the Numbers
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            Our platform has empowered thousands of individuals, startups, and organizations 
            across Africa to achieve their fundraising goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="card">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${getColorClasses(stat.color)}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                
                <div className="mb-2">
                  <span className="text-4xl lg:text-5xl font-bold text-accent-900">
                    {inView && (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        separator=","
                      />
                    )}
                    {!inView && '0'}
                  </span>
                  <span className="text-2xl lg:text-3xl font-bold text-accent-900">
                    {stat.suffix}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-accent-900 mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-accent-600 text-sm">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-accent-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-2">
                $2.5M
              </div>
              <div className="text-accent-600">Average Campaign Success</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-600 mb-2">
                30 Days
              </div>
              <div className="text-accent-600">Average Time to Goal</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-2">
                98%
              </div>
              <div className="text-accent-600">Payment Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection
