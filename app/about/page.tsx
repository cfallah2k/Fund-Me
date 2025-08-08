'use client'

import { motion } from 'framer-motion'
import { 
  Heart, 
  Users, 
  Globe, 
  Target, 
  Award, 
  Shield,
  TrendingUp,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { label: 'Total Raised', value: '$2.5M+', icon: TrendingUp },
    { label: 'Successful Campaigns', value: '1,200+', icon: CheckCircle },
    { label: 'Active Users', value: '50K+', icon: Users },
    { label: 'Countries Served', value: '25+', icon: Globe },
  ]

  const values = [
    {
      title: 'Transparency',
      description: 'We believe in complete transparency in all our operations, from campaign funding to impact reporting.',
      icon: Shield
    },
    {
      title: 'Innovation',
      description: 'We continuously innovate to provide the best fundraising and investment experience for our users.',
      icon: Target
    },
    {
      title: 'Community',
      description: 'We foster a strong community of fundraisers, investors, and supporters across Africa.',
      icon: Users
    },
    {
      title: 'Impact',
      description: 'We measure success not just by numbers, but by the real impact we create in communities.',
      icon: Heart
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former investment banker with 15+ years experience in African markets. Passionate about financial inclusion.',
      image: '/api/placeholder/200/200',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      twitter: 'https://twitter.com/sarahjohnson'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Tech leader with expertise in fintech and blockchain. Previously led engineering teams at major African startups.',
      image: '/api/placeholder/200/200',
      linkedin: 'https://linkedin.com/in/michaelchen',
      twitter: 'https://twitter.com/michaelchen'
    },
    {
      name: 'Amina Hassan',
      role: 'Head of Operations',
      bio: 'Operations expert with deep knowledge of African business landscape and regulatory compliance.',
      image: '/api/placeholder/200/200',
      linkedin: 'https://linkedin.com/in/aminahassan',
      twitter: 'https://twitter.com/aminahassan'
    },
    {
      name: 'David Okafor',
      role: 'Head of Partnerships',
      bio: 'Strategic partnerships specialist with extensive network across African financial institutions.',
      image: '/api/placeholder/200/200',
      linkedin: 'https://linkedin.com/in/davidokafor',
      twitter: 'https://twitter.com/davidokafor'
    }
  ]

  const milestones = [
    {
      year: '2023',
      title: 'Platform Launch',
      description: 'Fund-Me officially launched with initial campaigns in Nigeria and Kenya.'
    },
    {
      year: '2023',
      title: 'First $1M Raised',
      description: 'Reached our first million dollars in total funds raised across all campaigns.'
    },
    {
      year: '2024',
      title: 'Regional Expansion',
      description: 'Expanded operations to 15 additional African countries.'
    },
    {
      year: '2024',
      title: 'Partnership Network',
      description: 'Established partnerships with major African banks and financial institutions.'
    }
  ]

  return (
    <div className="min-h-screen bg-accent-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Africa Through
              <span className="block">Crowdfunding & Investment</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              Fund-Me is revolutionizing how people, businesses, and organizations across Africa raise funds and connect with investors.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Heart className="w-6 h-6" />
              <span className="text-lg">Making dreams possible, one investment at a time</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-accent-900 mb-2">{stat.value}</div>
                <div className="text-accent-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-accent-900 mb-6">Our Mission</h2>
            <p className="text-xl text-accent-600 max-w-4xl mx-auto">
              To democratize access to funding across Africa by providing a transparent, secure, and efficient platform 
              that connects innovative ideas with willing investors, fostering economic growth and social impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-accent-900 mb-4">For Fundraisers</h3>
              <ul className="space-y-3 text-accent-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5" />
                  <span>Access to a global network of investors and supporters</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5" />
                  <span>Transparent fee structure with no hidden costs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5" />
                  <span>Comprehensive tools for campaign management and updates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5" />
                  <span>Legal compliance and regulatory support</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-accent-900 mb-4">For Investors</h3>
              <ul className="space-y-3 text-accent-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5" />
                  <span>Diverse investment opportunities across multiple sectors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5" />
                  <span>Transparent due diligence and risk assessment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5" />
                  <span>Regular updates and progress tracking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5" />
                  <span>Secure payment processing and escrow services</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-accent-900 mb-6">Our Values</h2>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our relationships with users, partners, and communities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-accent-900 mb-3">{value.title}</h3>
                <p className="text-accent-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-accent-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto">
              Our diverse team brings together expertise in fintech, African markets, and social impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-600">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-accent-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 mb-3">{member.role}</p>
                <p className="text-sm text-accent-600 mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} className="text-accent-600 hover:text-primary-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.twitter} className="text-accent-600 hover:text-primary-600 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-accent-900 mb-6">Our Journey</h2>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto">
              Key milestones in our mission to democratize funding across Africa.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-accent-200 h-full"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-accent-900 mb-2">{milestone.title}</h3>
                      <p className="text-accent-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary-600 rounded-full relative z-10"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-accent-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto">
              Have questions or want to learn more about Fund-Me? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-accent-900 mb-2">Email Us</h3>
              <p className="text-accent-600 mb-4">hello@fund-me.africa</p>
              <p className="text-sm text-accent-500">We'll respond within 24 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-accent-900 mb-2">Call Us</h3>
              <p className="text-accent-600 mb-4">+234 801 234 5678</p>
              <p className="text-sm text-accent-500">Mon-Fri, 9AM-6PM WAT</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-accent-900 mb-2">Visit Us</h3>
              <p className="text-accent-600 mb-4">Lagos, Nigeria</p>
              <p className="text-sm text-accent-500">Headquarters</p>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <h3 className="text-lg font-semibold text-accent-900 mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-accent-600 hover:text-primary-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-accent-600 hover:text-primary-600 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-accent-600 hover:text-primary-600 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-accent-600 hover:text-primary-600 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
