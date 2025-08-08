import React from 'react';
import { Download, ExternalLink, Calendar, Users, Globe, Award } from 'lucide-react';

const pressReleases = [
  {
    date: "2024-01-15",
    title: "Fund-Me Raises $10M Series A to Expand Crowdfunding Access Across Africa",
    excerpt: "The funding round led by Andreessen Horowitz will help the platform expand to 15 new African countries and launch enterprise features.",
    category: "Funding"
  },
  {
    date: "2024-01-08",
    title: "Fund-Me Surpasses $50 Million in Total Funds Raised for African Entrepreneurs",
    excerpt: "Platform celebrates milestone achievement with over 25,000 successful campaigns across 20 African countries.",
    category: "Milestone"
  },
  {
    date: "2023-12-20",
    title: "Fund-Me Partners with African Development Bank to Support Small Business Growth",
    excerpt: "Strategic partnership will provide additional funding sources and business development resources for platform users.",
    category: "Partnership"
  },
  {
    date: "2023-12-10",
    title: "Fund-Me Launches AI-Powered Campaign Optimization Tools",
    excerpt: "New machine learning features help campaign creators improve success rates by up to 40% through personalized recommendations.",
    category: "Product"
  },
  {
    date: "2023-11-25",
    title: "Fund-Me Named 'Fintech Startup of the Year' at African Innovation Awards",
    excerpt: "Recognition highlights the company's impact on democratizing access to funding across the continent.",
    category: "Award"
  }
];

const mediaKit = [
  {
    name: "Company Logo Pack",
    description: "High-resolution logos in various formats (PNG, SVG, EPS)",
    size: "2.5 MB",
    type: "ZIP"
  },
  {
    name: "Brand Guidelines",
    description: "Complete brand identity guidelines and usage instructions",
    size: "1.8 MB",
    type: "PDF"
  },
  {
    name: "Company Fact Sheet",
    description: "Key statistics, milestones, and company information",
    size: "450 KB",
    type: "PDF"
  },
  {
    name: "Executive Photos",
    description: "High-resolution headshots of key executives",
    size: "5.2 MB",
    type: "ZIP"
  },
  {
    name: "Product Screenshots",
    description: "Platform screenshots and user interface images",
    size: "3.1 MB",
    type: "ZIP"
  }
];

const coverage = [
  {
    outlet: "TechCrunch",
    title: "Fund-Me is democratizing crowdfunding across Africa",
    date: "2024-01-16",
    url: "#"
  },
  {
    outlet: "Forbes Africa",
    title: "The rise of African fintech: How Fund-Me is changing the game",
    date: "2024-01-10",
    url: "#"
  },
  {
    outlet: "BBC Africa",
    title: "Crowdfunding platform helps African entrepreneurs raise millions",
    date: "2023-12-22",
    url: "#"
  },
  {
    outlet: "Financial Times",
    title: "African fintech Fund-Me secures Series A funding",
    date: "2023-12-15",
    url: "#"
  },
  {
    outlet: "Quartz Africa",
    title: "How Fund-Me is building the future of African entrepreneurship",
    date: "2023-11-28",
    url: "#"
  }
];

const stats = [
  { number: "$50M+", label: "Total Funds Raised" },
  { number: "25K+", label: "Successful Campaigns" },
  { number: "20", label: "African Countries" },
  { number: "500K+", label: "Platform Users" }
];

const executives = [
  {
    name: "Sarah Johnson",
    title: "CEO & Co-Founder",
    bio: "Former Goldman Sachs executive with 15+ years in fintech. Led digital transformation initiatives across emerging markets.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Mike Chen",
    title: "CTO & Co-Founder",
    bio: "Former engineering lead at Stripe and PayPal. Expert in building scalable financial platforms and payment systems.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Emily Rodriguez",
    title: "Head of Product",
    bio: "Product strategist with experience at Google and Facebook. Focused on user experience and growth in emerging markets.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Press & Media</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Latest news, updates, and resources for media professionals covering Fund-Me's mission to democratize access to funding across Africa.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200">
              Download Media Kit
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Releases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mr-4">
                        {release.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(release.date).toLocaleDateString()}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{release.title}</h3>
                    <p className="text-gray-600">{release.excerpt}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                      Read More
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Kit */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Media Kit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaKit.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    {item.type} • {item.size}
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Coverage */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Media Coverage</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              {coverage.map((article, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-gray-200 last:border-b-0">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{article.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <span className="font-medium">{article.outlet}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <a
                    href={article.url}
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium ml-4"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Executive Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Executive Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executives.map((exec, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={exec.image}
                  alt={exec.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{exec.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{exec.title}</p>
                  <p className="text-gray-600 text-sm">{exec.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Media Inquiries</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            For press inquiries, interview requests, or additional information, please contact our media relations team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">Press Contact</h3>
              <p className="text-blue-100">press@fund-me.com</p>
              <p className="text-blue-100">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Business Inquiries</h3>
              <p className="text-blue-100">partnerships@fund-me.com</p>
              <p className="text-blue-100">+1 (555) 987-6543</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
