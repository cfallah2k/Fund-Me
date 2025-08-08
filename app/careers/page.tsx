import React from 'react';
import { MapPin, Clock, Briefcase, Users, Heart, Lightbulb, Globe, Award } from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / Lagos, Nigeria",
    type: "Full-time",
    experience: "5+ years",
    description: "Join our engineering team to build the next generation of crowdfunding tools. You'll work on React, Node.js, and cloud infrastructure.",
    requirements: [
      "5+ years of full-stack development experience",
      "Strong experience with React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, GCP, or Azure)",
      "Knowledge of database design and optimization",
      "Experience with microservices architecture"
    ]
  },
  {
    id: 2,
    title: "Product Marketing Manager",
    department: "Marketing",
    location: "Cape Town, South Africa",
    type: "Full-time",
    experience: "3+ years",
    description: "Lead go-to-market strategies for our platform across African markets. Drive user acquisition and engagement through data-driven campaigns.",
    requirements: [
      "3+ years in product marketing or growth marketing",
      "Experience in fintech or marketplace platforms",
      "Strong analytical and data interpretation skills",
      "Experience with African markets preferred",
      "Excellent communication and presentation skills"
    ]
  },
  {
    id: 3,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Create intuitive and beautiful user experiences that help people bring their ideas to life. Work closely with our product and engineering teams.",
    requirements: [
      "4+ years of UX/UI design experience",
      "Proficiency in Figma, Sketch, or similar tools",
      "Experience with design systems and component libraries",
      "Strong understanding of user-centered design principles",
      "Portfolio demonstrating end-to-end design process"
    ]
  },
  {
    id: 4,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Nairobi, Kenya",
    type: "Full-time",
    experience: "2+ years",
    description: "Help our campaign creators succeed by providing strategic guidance and support throughout their crowdfunding journey.",
    requirements: [
      "2+ years in customer success or account management",
      "Experience in startup or high-growth environment",
      "Strong communication and problem-solving skills",
      "Understanding of crowdfunding or fundraising preferred",
      "Fluency in English and local languages preferred"
    ]
  },
  {
    id: 5,
    title: "Data Scientist",
    department: "Data & Analytics",
    location: "Remote / Accra, Ghana",
    type: "Full-time",
    experience: "3+ years",
    description: "Use data to improve campaign success rates, detect fraud, and optimize platform performance. Build ML models and analytics dashboards.",
    requirements: [
      "3+ years of data science experience",
      "Strong Python/R skills and ML experience",
      "Experience with SQL and data visualization tools",
      "Knowledge of statistical modeling and A/B testing",
      "Experience with big data technologies preferred"
    ]
  },
  {
    id: 6,
    title: "Community Manager",
    department: "Community",
    location: "Multiple locations",
    type: "Full-time",
    experience: "2+ years",
    description: "Build and nurture our creator community across Africa. Organize events, manage social media, and create engaging content.",
    requirements: [
      "2+ years in community management or social media",
      "Strong writing and content creation skills",
      "Experience with social media platforms and tools",
      "Understanding of African startup ecosystem preferred",
      "Event planning and management experience"
    ]
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance for you and your family, plus wellness programs and mental health support."
  },
  {
    icon: Globe,
    title: "Remote-First",
    description: "Work from anywhere in Africa. We provide home office setup allowance and co-working space memberships."
  },
  {
    icon: Lightbulb,
    title: "Learning & Development",
    description: "Annual learning budget, conference attendance, and access to online courses and professional development."
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Annual team retreats, regular virtual social events, and opportunities to meet teammates across Africa."
  },
  {
    icon: Award,
    title: "Equity & Growth",
    description: "Equity participation in Fund-Me's success, performance bonuses, and clear career progression paths."
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Flexible working hours, unlimited PTO policy, and support for work-life balance."
  }
];

const values = [
  {
    title: "Impact First",
    description: "We're building tools that democratize access to funding across Africa. Every decision we make considers the impact on our creators and their communities."
  },
  {
    title: "Transparency",
    description: "We believe in open communication, clear processes, and honest feedback. We share our challenges and successes openly with the team."
  },
  {
    title: "Diversity & Inclusion",
    description: "We're committed to building a team that represents the diversity of Africa. We welcome people of all backgrounds, experiences, and perspectives."
  },
  {
    title: "Continuous Learning",
    description: "We're always learning and improving. We encourage experimentation, embrace failure as learning, and invest in our team's growth."
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Join Our Mission</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Help us democratize access to funding across Africa. Build the future of crowdfunding with a passionate, diverse team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200">
              View Open Positions
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200">
                    Apply Now
                  </button>
                </div>
                
                <p className="text-gray-700 mb-6">{job.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Hiring Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Application Review</h3>
              <p className="text-gray-600 text-sm">We review your application and portfolio within 3-5 business days.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Initial Interview</h3>
              <p className="text-gray-600 text-sm">30-minute call with our hiring team to discuss your background and interest.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Technical/Skills Assessment</h3>
              <p className="text-gray-600 text-sm">Role-specific assessment or case study to evaluate your skills.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Final Interview</h3>
              <p className="text-gray-600 text-sm">Meet with team members and leadership to ensure mutual fit.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Don't see the right role?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200">
              Send General Application
            </button>
            <a
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-green-800 transition-colors duration-200"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
