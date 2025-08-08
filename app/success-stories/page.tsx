import React from 'react';

const successStories = [
  {
    id: 1,
    title: "Community Park Renovation",
    creator: "Sarah Johnson",
    location: "Portland, OR",
    raised: "$75,000",
    goal: "$50,000",
    backers: 1247,
    category: "Community",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    story: "A local community came together to transform their neglected park into a vibrant space for families and children. The campaign exceeded its goal by 50% and created lasting impact.",
    videoUrl: "#"
  },
  {
    id: 2,
    title: "Eco-Friendly Water Bottle",
    creator: "Mike Chen",
    location: "San Francisco, CA",
    raised: "$125,000",
    goal: "$80,000",
    backers: 2891,
    category: "Technology",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    story: "An innovative water bottle that filters and purifies water on-the-go. The campaign went viral and became one of our most successful tech campaigns.",
    videoUrl: "#"
  },
  {
    id: 3,
    title: "Local Food Bank Expansion",
    creator: "Emily Rodriguez",
    location: "Austin, TX",
    raised: "$45,000",
    goal: "$30,000",
    backers: 892,
    category: "Charity",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    story: "Expanded a local food bank to serve 3x more families in need. The campaign received overwhelming community support.",
    videoUrl: "#"
  },
  {
    id: 4,
    title: "Indie Documentary Film",
    creator: "David Kim",
    location: "Los Angeles, CA",
    raised: "$180,000",
    goal: "$150,000",
    backers: 3456,
    category: "Art & Creative",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    story: "A documentary about climate change that went on to win awards at major film festivals. The campaign attracted international attention.",
    videoUrl: "#"
  },
  {
    id: 5,
    title: "Educational App for Kids",
    creator: "Lisa Wang",
    location: "Seattle, WA",
    raised: "$95,000",
    goal: "$60,000",
    backers: 1678,
    category: "Education",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    story: "An educational app that helps children learn math through interactive games. Now used in schools across the country.",
    videoUrl: "#"
  },
  {
    id: 6,
    title: "Sustainable Fashion Line",
    creator: "Alex Thompson",
    location: "New York, NY",
    raised: "$220,000",
    goal: "$100,000",
    backers: 4123,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    story: "A sustainable fashion line made from recycled materials. The campaign went viral on social media and exceeded all expectations.",
    videoUrl: "#"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Campaign Creator",
    quote: "Fund-Me made it incredibly easy to bring our community project to life. The support we received was amazing!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Mike Chen",
    role: "Entrepreneur",
    quote: "The platform's reach and tools helped us connect with backers worldwide. We couldn't have done it without Fund-Me.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Emily Rodriguez",
    role: "Non-profit Director",
    quote: "Fund-Me's transparency and ease of use made fundraising for our cause simple and effective.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const stats = [
  { number: "$50M+", label: "Total Raised" },
  { number: "25K+", label: "Successful Campaigns" },
  { number: "2M+", label: "Backers Worldwide" },
  { number: "95%", label: "Success Rate" }
];

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Discover how creators, entrepreneurs, and communities have brought their ideas to life through Fund-Me
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.slice(0, 2).map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    className="w-full h-64 object-cover"
                    src={story.image}
                    alt={story.title}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {story.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.story}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{story.raised}</div>
                      <div className="text-sm text-gray-500">Raised</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{story.backers}</div>
                      <div className="text-sm text-gray-500">Backers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{story.creator}</div>
                      <div className="text-sm text-gray-500">Creator</div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200">
                      Watch Video
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors duration-200">
                      Read Full Story
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Success Stories Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">More Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.slice(2).map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover"
                    src={story.image}
                    alt={story.title}
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {story.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{story.story}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-lg font-bold text-green-600">{story.raised}</div>
                      <div className="text-xs text-gray-500">raised of {story.goal}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{story.backers}</div>
                      <div className="text-xs text-gray-500">backers</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">by {story.creator}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Creators Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Get Started */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Success Story?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of creators who have successfully funded their projects on Fund-Me. 
            Your next big idea could be our next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/campaigns/new"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Campaign
            </a>
            <a
              href="/blog"
              className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Read Success Tips
            </a>
          </div>
        </div>

        {/* Success Tips */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Tips for Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tell Your Story</h3>
              <p className="text-gray-600 text-sm">
                Create compelling content that connects with your audience emotionally
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl mb-4">📢</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Promote Widely</h3>
              <p className="text-gray-600 text-sm">
                Use social media and personal networks to spread the word
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Set Realistic Goals</h3>
              <p className="text-gray-600 text-sm">
                Start with achievable funding targets and build momentum
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Engage Your Backers</h3>
              <p className="text-gray-600 text-sm">
                Keep supporters updated and involved throughout your campaign
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
