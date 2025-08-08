import React from 'react';

const helpCategories = [
  {
    title: "Getting Started",
    icon: "🚀",
    articles: [
      {
        title: "How to Create Your First Campaign",
        description: "Step-by-step guide to launching your first crowdfunding campaign",
        url: "#"
      },
      {
        title: "Setting Up Your Account",
        description: "Complete guide to account setup and verification",
        url: "#"
      },
      {
        title: "Understanding Platform Fees",
        description: "Learn about our transparent fee structure",
        url: "#"
      }
    ]
  },
  {
    title: "Campaign Management",
    icon: "📊",
    articles: [
      {
        title: "Updating Your Campaign",
        description: "How to edit and update your campaign details",
        url: "#"
      },
      {
        title: "Managing Donations",
        description: "Track and manage incoming donations",
        url: "#"
      },
      {
        title: "Campaign Analytics",
        description: "Understanding your campaign performance metrics",
        url: "#"
      }
    ]
  },
  {
    title: "Payment & Billing",
    icon: "💳",
    articles: [
      {
        title: "Payment Methods",
        description: "Supported payment methods and security",
        url: "#"
      },
      {
        title: "Withdrawing Funds",
        description: "How to withdraw your raised funds",
        url: "#"
      },
      {
        title: "Tax Information",
        description: "Tax implications for campaign creators",
        url: "#"
      }
    ]
  },
  {
    title: "Donor Support",
    icon: "❤️",
    articles: [
      {
        title: "Making a Donation",
        description: "How to donate to campaigns safely",
        url: "#"
      },
      {
        title: "Donation Refunds",
        description: "Understanding our refund policy",
        url: "#"
      },
      {
        title: "Donor Privacy",
        description: "How we protect your personal information",
        url: "#"
      }
    ]
  },
  {
    title: "Account & Security",
    icon: "🔒",
    articles: [
      {
        title: "Password Security",
        description: "Best practices for account security",
        url: "#"
      },
      {
        title: "Two-Factor Authentication",
        description: "Setting up 2FA for enhanced security",
        url: "#"
      },
      {
        title: "Account Recovery",
        description: "Recovering access to your account",
        url: "#"
      }
    ]
  },
  {
    title: "Platform Features",
    icon: "⚙️",
    articles: [
      {
        title: "Social Media Integration",
        description: "Sharing your campaign on social platforms",
        url: "#"
      },
      {
        title: "Campaign Updates",
        description: "Keeping donors informed with updates",
        url: "#"
      },
      {
        title: "Rewards & Perks",
        description: "Setting up rewards for your donors",
        url: "#"
      }
    ]
  }
];

const popularArticles = [
  {
    title: "How to Create a Successful Campaign",
    views: "15.2k",
    category: "Getting Started"
  },
  {
    title: "Understanding Platform Fees",
    views: "12.8k",
    category: "Getting Started"
  },
  {
    title: "Withdrawing Your Funds",
    views: "10.5k",
    category: "Payment & Billing"
  },
  {
    title: "Campaign Analytics Guide",
    views: "9.3k",
    category: "Campaign Management"
  },
  {
    title: "Setting Up Two-Factor Authentication",
    views: "8.7k",
    category: "Account & Security"
  }
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to your questions and learn how to make the most of Fund-Me
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for help articles..."
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-4">📞</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Support</h3>
            <p className="text-gray-600 mb-4">Get help from our support team</p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Chat with us in real-time</p>
            <button className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200">
              Start Chat
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
            <p className="text-gray-600 mb-4">Send us an email</p>
            <a
              href="mailto:support@fund-me.com"
              className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.views} views</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Read Article →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Help Categories */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{category.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <div key={articleIndex} className="border-t border-gray-100 pt-3">
                        <a
                          href={article.url}
                          className="block hover:bg-gray-50 p-2 rounded-md transition-colors duration-200"
                        >
                          <h4 className="font-medium text-gray-900 mb-1">{article.title}</h4>
                          <p className="text-sm text-gray-600">{article.description}</p>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="bg-white rounded-lg shadow-lg">
            <div className="divide-y divide-gray-200">
              <div className="p-6">
                <button className="flex justify-between items-center w-full text-left">
                  <h3 className="text-lg font-medium text-gray-900">How much does Fund-Me charge?</h3>
                  <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="mt-4 text-gray-600">
                  Fund-Me charges a 5% platform fee on successful campaigns. Payment processing fees may also apply depending on your payment method.
                </div>
              </div>

              <div className="p-6">
                <button className="flex justify-between items-center w-full text-left">
                  <h3 className="text-lg font-medium text-gray-900">How long does it take to receive funds?</h3>
                  <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="mt-4 text-gray-600">
                  Funds are typically transferred to your account within 5-7 business days after your campaign ends successfully.
                </div>
              </div>

              <div className="p-6">
                <button className="flex justify-between items-center w-full text-left">
                  <h3 className="text-lg font-medium text-gray-900">Can I edit my campaign after launching?</h3>
                  <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="mt-4 text-gray-600">
                  Yes, you can edit most aspects of your campaign after launch. However, some changes may require approval from our team.
                </div>
              </div>

              <div className="p-6">
                <button className="flex justify-between items-center w-full text-left">
                  <h3 className="text-lg font-medium text-gray-900">What happens if my campaign doesn't reach its goal?</h3>
                  <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="mt-4 text-gray-600">
                  If your campaign doesn't reach its funding goal, no charges are made to donors and no fees are charged to you.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Support
            </a>
            <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Start Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
