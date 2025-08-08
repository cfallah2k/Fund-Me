import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "How to Create a Successful Crowdfunding Campaign",
    excerpt: "Learn the essential tips and strategies to make your crowdfunding campaign stand out and reach your funding goals.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Tips & Advice",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Success Story: Local Community Raises $50K for Park Renovation",
    excerpt: "Discover how a small community came together to transform their local park through the power of crowdfunding.",
    author: "Mike Chen",
    date: "2024-01-12",
    category: "Success Stories",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "The Future of Crowdfunding: Trends to Watch in 2024",
    excerpt: "Explore the latest trends and innovations shaping the crowdfunding landscape this year.",
    author: "Emily Rodriguez",
    date: "2024-01-10",
    category: "Industry News",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Marketing Your Campaign: Social Media Strategies That Work",
    excerpt: "Effective social media strategies to promote your crowdfunding campaign and reach more potential donors.",
    author: "David Kim",
    date: "2024-01-08",
    category: "Marketing",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Building Trust: Why Transparency Matters in Crowdfunding",
    excerpt: "How being transparent about your goals and progress can build trust with your donors and increase success rates.",
    author: "Lisa Wang",
    date: "2024-01-05",
    category: "Tips & Advice",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Fund-Me Platform Updates: New Features for 2024",
    excerpt: "Discover the latest features and improvements we've added to make your crowdfunding experience even better.",
    author: "Fund-Me Team",
    date: "2024-01-03",
    category: "Platform Updates",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const categories = [
  "All Posts",
  "Tips & Advice",
  "Success Stories",
  "Industry News",
  "Marketing",
  "Platform Updates"
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fund-Me Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest crowdfunding tips, success stories, and platform news
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  category === "All Posts"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  className="h-64 w-full object-cover md:h-full"
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-500 text-sm ml-4">{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt={blogPosts[0].author}
                    />
                    <span className="text-sm text-gray-700 ml-2">{blogPosts[0].author}</span>
                  </div>
                  <span className="text-sm text-gray-500">{blogPosts[0].date}</span>
                </div>
                <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                className="h-48 w-full object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-4">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt={post.author}
                    />
                    <span className="text-sm text-gray-700 ml-2">{post.author}</span>
                  </div>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-blue-100 mb-6">
              Get the latest crowdfunding tips and success stories delivered to your inbox
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-r-md font-medium hover:bg-gray-100 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
