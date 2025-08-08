'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Founder, SolarTech Africa',
      image: '/api/placeholder/60/60',
      content: 'Fund-Me helped us raise $2.5M for our solar energy project. The platform\'s reach and investor matching capabilities are incredible. We\'re now powering 10,000 homes across Nigeria.',
      rating: 5,
      amount: '$2.5M',
      category: 'Renewable Energy',
    },
    {
      name: 'David Okechukwu',
      role: 'CEO, EduTech Solutions',
      image: '/api/placeholder/60/60',
      content: 'As an investor, Fund-Me has opened up amazing opportunities in Africa\'s tech sector. The due diligence tools and transparency make investing here as safe as anywhere in the world.',
      rating: 5,
      amount: '$1.2M',
      category: 'Technology',
    },
    {
      name: 'Amina Hassan',
      role: 'Director, Health for All NGO',
      image: '/api/placeholder/60/60',
      content: 'We raised $500K for our healthcare initiative in rural Kenya. The platform made it easy to connect with donors who care about our mission. The impact has been life-changing.',
      rating: 5,
      amount: '$500K',
      category: 'Healthcare',
    },
    {
      name: 'Michael Chen',
      role: 'Angel Investor',
      image: '/api/placeholder/60/60',
      content: 'I\'ve invested in 15 startups through Fund-Me. The quality of projects and the platform\'s vetting process gives me confidence. Returns have exceeded my expectations.',
      rating: 5,
      amount: '$3.2M',
      category: 'Portfolio',
    },
    {
      name: 'Grace Mwangi',
      role: 'Student, University of Nairobi',
      image: '/api/placeholder/60/60',
      content: 'Fund-Me helped me raise tuition fees when I had no other options. The community support was overwhelming. I\'m now in my final year and will graduate debt-free.',
      rating: 5,
      amount: '$15K',
      category: 'Education',
    },
    {
      name: 'Robert Kimani',
      role: 'Founder, AgriTech Innovations',
      image: '/api/placeholder/60/60',
      content: 'Our agricultural technology startup found the perfect investors through Fund-Me. The platform\'s networking features helped us build relationships that go beyond just funding.',
      rating: 5,
      amount: '$800K',
      category: 'Agriculture',
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-accent-300'
        }`}
      />
    ))
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
            What Our Users Say
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            Join thousands of satisfied users who have achieved their fundraising goals 
            and investment objectives through Fund-Me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card h-full group-hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-accent-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-accent-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-primary-200 group-hover:text-primary-300 transition-colors duration-300" />
                </div>

                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                  <span className="ml-2 text-sm text-accent-600">
                    {testimonial.rating}.0
                  </span>
                </div>

                <p className="text-accent-700 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-accent-200">
                  <div className="text-sm text-accent-600">
                    {testimonial.category}
                  </div>
                  <div className="text-lg font-bold text-primary-600">
                    {testimonial.amount}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-accent-50 rounded-2xl p-8 border border-accent-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-accent-900 mb-4">
              Trusted by Thousands
            </h3>
            <p className="text-accent-600">
              Our platform has earned the trust of fundraisers and investors across Africa.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-sm text-accent-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-2">4.9/5</div>
              <div className="text-sm text-accent-600">User Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">50K+</div>
              <div className="text-sm text-accent-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-2">25+</div>
              <div className="text-sm text-accent-600">Countries</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
