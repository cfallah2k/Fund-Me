'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ChevronDown, 
  ChevronUp,
  Search,
  HelpCircle,
  Shield,
  DollarSign,
  Users,
  Globe,
  CreditCard,
  FileText
} from 'lucide-react'

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('general')
  const [openItems, setOpenItems] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'general', label: 'General', icon: HelpCircle },
    { id: 'fundraising', label: 'Fundraising', icon: DollarSign },
    { id: 'investing', label: 'Investing', icon: Users },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'legal', label: 'Legal', icon: FileText },
  ]

  const faqs = {
    general: [
      {
        question: 'What is Fund-Me?',
        answer: 'Fund-Me is a comprehensive crowdfunding and investment platform designed specifically for Africa. We connect fundraisers with investors, enabling individuals, startups, businesses, and NGOs to raise funds for their projects while providing investors with diverse investment opportunities.'
      },
      {
        question: 'How does Fund-Me work?',
        answer: 'Fund-Me operates as a two-sided marketplace. Fundraisers create campaigns to raise funds for their projects, while investors browse and invest in campaigns that align with their interests. Our platform handles all payment processing, escrow services, and provides tools for campaign management and progress tracking.'
      },
      {
        question: 'Is Fund-Me available in my country?',
        answer: 'Fund-Me is currently available in 25+ African countries including Nigeria, Kenya, Ghana, South Africa, Egypt, and many others. We\'re continuously expanding our reach across the continent. Check our website for the most up-to-date list of supported countries.'
      },
      {
        question: 'What types of campaigns can I create or invest in?',
        answer: 'We support various campaign types including personal fundraising (medical, education, emergencies), business funding (startups, expansion), social causes (NGOs, community projects), and equity offerings (startup investments). Each category has specific requirements and verification processes.'
      },
      {
        question: 'How do I get started on Fund-Me?',
        answer: 'Getting started is easy! Simply create an account, verify your identity, and you can either start a fundraising campaign or begin browsing investment opportunities. Our platform guides you through each step with comprehensive tutorials and support.'
      }
    ],
    fundraising: [
      {
        question: 'How much can I raise on Fund-Me?',
        answer: 'There\'s no strict limit on how much you can raise, but it depends on your campaign type and verification level. Personal campaigns typically range from $100 to $50,000, while business campaigns can go up to $500,000 or more. Equity offerings have different limits based on regulatory requirements.'
      },
      {
        question: 'What fees does Fund-Me charge for fundraising?',
        answer: 'Fund-Me charges a 5% platform fee on successful campaigns, plus payment processing fees (typically 2.9% + $0.30 per transaction). There are no upfront fees - you only pay when your campaign is successful. Failed campaigns incur no fees.'
      },
      {
        question: 'How long can my campaign run?',
        answer: 'Campaign duration varies by type: Personal campaigns can run for 30-90 days, business campaigns for 30-180 days, and equity offerings for up to 365 days. You can set your preferred duration within these limits when creating your campaign.'
      },
      {
        question: 'What happens if my campaign doesn\'t reach its goal?',
        answer: 'If your campaign doesn\'t reach its goal by the deadline, all funds are returned to investors (minus payment processing fees). This is called "all-or-nothing" funding. However, some campaigns may offer partial funding options depending on the type.'
      },
      {
        question: 'Can I update my campaign after it\'s launched?',
        answer: 'Yes, you can update your campaign content, add new rewards, and post updates throughout your campaign. However, you cannot change the funding goal or campaign duration once launched. Major changes require approval from our team.'
      }
    ],
    investing: [
      {
        question: 'How do I invest in campaigns on Fund-Me?',
        answer: 'To invest, browse campaigns in our discover section, review campaign details and due diligence information, select your investment amount, choose a payment method, and complete the transaction. You\'ll receive regular updates on your investments.'
      },
      {
        question: 'What is the minimum investment amount?',
        answer: 'Minimum investment amounts vary by campaign type. Personal campaigns typically have a $10 minimum, business campaigns $50, and equity offerings $100. Some campaigns may set higher minimums based on their specific requirements.'
      },
      {
        question: 'How do I track my investments?',
        answer: 'You can track all your investments in your dashboard. We provide real-time updates on campaign progress, regular communication from fundraisers, and detailed reporting on your portfolio performance and returns.'
      },
      {
        question: 'What returns can I expect from my investments?',
        answer: 'Returns vary significantly by campaign type. Personal campaigns typically offer no financial returns but may include rewards. Business campaigns may offer interest or equity returns. Equity offerings can provide significant returns but also carry higher risks.'
      },
      {
        question: 'Can I sell or transfer my investments?',
        answer: 'Investment liquidity depends on the campaign type. Some equity investments may be transferable or tradeable on secondary markets, while others are locked until the campaign term ends. Personal campaign investments are typically non-transferable.'
      }
    ],
    security: [
      {
        question: 'How secure is my personal and financial information?',
        answer: 'Fund-Me uses bank-level security measures including SSL encryption, PCI DSS compliance, and secure data centers. We never store your full payment card details and use industry-standard security protocols to protect all user data.'
      },
      {
        question: 'How does Fund-Me verify campaigns and fundraisers?',
        answer: 'We have a comprehensive verification process including identity verification, document review, background checks, and ongoing monitoring. Campaigns are reviewed by our team and may require additional documentation depending on the type and amount.'
      },
      {
        question: 'What happens if a fundraiser misuses funds?',
        answer: 'Fund-Me has strict policies against fund misuse. We require detailed spending plans and regular updates. If misuse is detected, we investigate thoroughly and may freeze funds, require refunds, or take legal action. Our escrow system provides additional protection.'
      },
      {
        question: 'Is my investment protected?',
        answer: 'While we implement extensive security measures, all investments carry inherent risks. We provide detailed risk assessments for each campaign and recommend diversifying your investments. Our platform includes fraud detection and insurance where applicable.'
      },
      {
        question: 'How does Fund-Me handle disputes?',
        answer: 'We have a dedicated dispute resolution team that investigates issues between fundraisers and investors. Our process includes mediation, evidence review, and if necessary, legal action. We maintain detailed records of all transactions and communications.'
      }
    ],
    payments: [
      {
        question: 'What payment methods does Fund-Me accept?',
        answer: 'We accept major credit cards (Visa, Mastercard, American Express), bank transfers, mobile money services (M-Pesa, MTN Money, etc.), and digital wallets. Payment options vary by country and campaign type.'
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'No, Fund-Me is committed to transparency. All fees are clearly displayed before you invest or create a campaign. You\'ll see the exact breakdown including platform fees, payment processing fees, and any applicable taxes.'
      },
      {
        question: 'How long do payments take to process?',
        answer: 'Credit card payments are processed immediately. Bank transfers typically take 2-5 business days. Mobile money transfers are usually instant. International transfers may take longer depending on your bank and country.'
      },
      {
        question: 'Can I get a refund?',
        answer: 'Refund policies vary by campaign type and timing. Personal campaigns typically allow refunds within 7 days of investment. Business and equity campaigns may have different terms. Failed campaigns automatically refund all investments.'
      },
      {
        question: 'How do I receive my returns or rewards?',
        answer: 'Returns and rewards are distributed according to each campaign\'s terms. Financial returns are typically paid to your registered payment method. Physical rewards are shipped to your address. Digital rewards are delivered via email or platform.'
      }
    ],
    legal: [
      {
        question: 'Is Fund-Me regulated?',
        answer: 'Yes, Fund-Me operates under relevant financial regulations in each country where we operate. We maintain licenses and registrations as required by local authorities and regularly update our compliance to meet changing regulatory requirements.'
      },
      {
        question: 'What are the tax implications of my investments?',
        answer: 'Tax implications vary by country and investment type. Returns from business and equity investments may be taxable as income or capital gains. We recommend consulting with a tax professional in your jurisdiction for specific advice.'
      },
      {
        question: 'What legal protections do I have as an investor?',
        answer: 'Investors are protected by our terms of service, escrow arrangements, and applicable securities laws. We provide detailed legal documentation for each campaign type and maintain records for regulatory compliance and dispute resolution.'
      },
      {
        question: 'How does Fund-Me handle regulatory compliance?',
        answer: 'We maintain a dedicated compliance team that monitors regulatory changes across all jurisdictions where we operate. We regularly update our platform and processes to ensure compliance with local laws and international standards.'
      },
      {
        question: 'What happens if Fund-Me goes out of business?',
        answer: 'Fund-Me has contingency plans including escrow arrangements and regulatory requirements that protect user funds even in the unlikely event of platform closure. We maintain insurance and follow regulatory requirements for fund protection.'
      }
    ]
  }

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const filteredFAQs = faqs[activeCategory as keyof typeof faqs].filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-accent-50">
      {/* Header */}
      <div className="bg-white border-b border-accent-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-accent-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto">
              Find answers to common questions about Fund-Me, our platform, and how to get the most out of your fundraising and investment experience.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                  activeCategory === category.id
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-accent-200 text-accent-600 hover:border-accent-300 hover:bg-accent-50'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          {filteredFAQs.map((faq, index) => {
            const itemId = `${activeCategory}-${index}`
            const isOpen = openItems.includes(itemId)
            
            return (
              <motion.div
                key={itemId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(itemId)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent-50 transition-colors"
                >
                  <h3 className="font-semibold text-accent-900 pr-4">
                    {faq.question}
                  </h3>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  )}
                </button>
                
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <div className="border-t border-accent-200 pt-4">
                      <p className="text-accent-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-lg opacity-90 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-outline bg-white text-primary-600 hover:bg-accent-50">
              Contact Support
            </button>
            <button className="btn-outline bg-white text-primary-600 hover:bg-accent-50">
              Live Chat
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FAQPage
