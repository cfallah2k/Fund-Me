import React from 'react';

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "Former tech executive with 15+ years experience in fintech and social impact. Passionate about democratizing access to funding.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Mike Chen",
    role: "CTO",
    bio: "Full-stack engineer with expertise in scalable platforms and payment systems. Led engineering teams at multiple successful startups.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    bio: "Product strategist focused on user experience and growth. Previously built products used by millions of users worldwide.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "David Kim",
    role: "Head of Marketing",
    bio: "Growth marketing expert with a track record of scaling consumer platforms. Specializes in community building and brand development.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Lisa Wang",
    role: "Head of Operations",
    bio: "Operations leader with experience in scaling support teams and building efficient processes. Focused on customer success.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Alex Thompson",
    role: "Lead Designer",
    bio: "UX/UI designer passionate about creating intuitive and beautiful user experiences. Previously worked at top design agencies.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    linkedin: "#",
    twitter: "#"
  }
];

const values = [
  {
    title: "Transparency",
    description: "We believe in complete transparency in all our operations, from fees to campaign processes.",
    icon: "🔍"
  },
  {
    title: "Community",
    description: "Building strong communities around meaningful causes is at the heart of what we do.",
    icon: "🤝"
  },
  {
    title: "Innovation",
    description: "Continuously innovating to provide the best crowdfunding experience for creators and donors.",
    icon: "💡"
  },
  {
    title: "Impact",
    description: "Focused on creating real, measurable impact in communities around the world.",
    icon: "🌍"
  }
];

const stats = [
  { number: "10M+", label: "Total Raised" },
  { number: "50K+", label: "Successful Campaigns" },
  { number: "2M+", label: "Donors Worldwide" },
  { number: "150+", label: "Countries Served" }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Meet the Fund-Me Team</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're a passionate team dedicated to democratizing access to funding and helping creators bring their ideas to life.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Fund-Me was born from a simple belief: everyone should have the opportunity to bring their ideas to life. 
              Founded in 2020, we've helped thousands of creators, entrepreneurs, and community leaders raise millions 
              of dollars for their projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To democratize access to funding by providing a transparent, secure, and user-friendly platform 
                that connects creators with supporters worldwide.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that great ideas shouldn't be limited by geography, background, or access to traditional 
                funding sources. Our platform empowers individuals and communities to support causes they believe in 
                and bring innovative projects to life.
              </p>
              <p className="text-gray-600">
                From local community projects to global initiatives, we've seen the incredible impact that 
                crowdfunding can have when people come together to support shared goals.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Key Milestones</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">2020 - Platform Launch</h5>
                    <p className="text-gray-600 text-sm">Fund-Me officially launched with our first 100 campaigns</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">2021 - $1M Milestone</h5>
                    <p className="text-gray-600 text-sm">Reached our first million dollars in total funds raised</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">2022 - International Expansion</h5>
                    <p className="text-gray-600 text-sm">Expanded to serve creators in 50+ countries worldwide</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">2023 - $10M Milestone</h5>
                    <p className="text-gray-600 text-sm">Celebrated $10 million in total funds raised across all campaigns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      className="h-16 w-16 rounded-full object-cover"
                      src={member.image}
                      alt={member.name}
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-blue-600 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href={member.twitter}
                      className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals who share our vision of democratizing access to funding. 
            If you're interested in joining our team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Get in Touch
            </a>
            <a
              href="#"
              className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
