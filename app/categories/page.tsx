import React from 'react';

const categories = [
  {
    id: 'technology',
    name: 'Technology',
    description: 'Innovative tech projects, apps, and gadgets',
    icon: '💻',
    campaignCount: 156,
    color: 'bg-blue-500'
  },
  {
    id: 'art',
    name: 'Art & Creative',
    description: 'Visual arts, music, film, and creative projects',
    icon: '🎨',
    campaignCount: 89,
    color: 'bg-purple-500'
  },
  {
    id: 'charity',
    name: 'Charity & Causes',
    description: 'Non-profit organizations and social causes',
    icon: '❤️',
    campaignCount: 234,
    color: 'bg-red-500'
  },
  {
    id: 'business',
    name: 'Business & Entrepreneurship',
    description: 'Startups, small businesses, and entrepreneurial ventures',
    icon: '💼',
    campaignCount: 123,
    color: 'bg-green-500'
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Educational programs, courses, and learning resources',
    icon: '📚',
    campaignCount: 67,
    color: 'bg-yellow-500'
  },
  {
    id: 'health',
    name: 'Health & Medical',
    description: 'Medical research, health products, and wellness',
    icon: '🏥',
    campaignCount: 98,
    color: 'bg-pink-500'
  },
  {
    id: 'environment',
    name: 'Environment',
    description: 'Environmental protection and sustainability projects',
    icon: '🌱',
    campaignCount: 76,
    color: 'bg-emerald-500'
  },
  {
    id: 'sports',
    name: 'Sports & Fitness',
    description: 'Athletic equipment, sports teams, and fitness programs',
    icon: '⚽',
    campaignCount: 45,
    color: 'bg-orange-500'
  },
  {
    id: 'food',
    name: 'Food & Agriculture',
    description: 'Restaurants, food products, and agricultural projects',
    icon: '🍕',
    campaignCount: 112,
    color: 'bg-amber-500'
  },
  {
    id: 'travel',
    name: 'Travel & Adventure',
    description: 'Travel experiences, documentaries, and adventure projects',
    icon: '✈️',
    campaignCount: 34,
    color: 'bg-indigo-500'
  },
  {
    id: 'fashion',
    name: 'Fashion & Beauty',
    description: 'Clothing, accessories, and beauty products',
    icon: '👗',
    campaignCount: 78,
    color: 'bg-rose-500'
  },
  {
    id: 'gaming',
    name: 'Gaming',
    description: 'Video games, board games, and gaming accessories',
    icon: '🎮',
    campaignCount: 92,
    color: 'bg-violet-500'
  }
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Campaign Categories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing projects across different categories. Find the perfect cause to support or get inspired for your next campaign.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{category.icon}</div>
                  <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {category.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {category.campaignCount} campaigns
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Categories Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Categories</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technology */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <div className="text-5xl">💻</div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{categories[0].campaignCount}</div>
                  <div className="text-blue-100">Active Campaigns</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">Technology</h3>
              <p className="text-blue-100 mb-6">
                From innovative apps to cutting-edge gadgets, discover the next big thing in technology.
              </p>
              
              <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors duration-200">
                Explore Technology
              </button>
            </div>

            {/* Charity */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-lg p-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <div className="text-5xl">❤️</div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{categories[2].campaignCount}</div>
                  <div className="text-red-100">Active Campaigns</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">Charity & Causes</h3>
              <p className="text-red-100 mb-6">
                Support meaningful causes and make a difference in communities around the world.
              </p>
              
              <button className="bg-white text-red-600 px-6 py-3 rounded-md font-medium hover:bg-red-50 transition-colors duration-200">
                Explore Causes
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Campaign?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of creators who have successfully funded their projects on Fund-Me.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/campaigns/new"
                className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Start a Campaign
              </a>
              <a
                href="/discover"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Browse All Campaigns
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
