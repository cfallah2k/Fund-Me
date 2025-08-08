import React from 'react';
import { Check, Star, Zap, Crown, Users } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    period: "Forever",
    description: "Perfect for individuals getting started with crowdfunding",
    icon: Users,
    color: "bg-gray-600",
    features: [
      "Create up to 3 campaigns",
      "5% platform fee",
      "Basic analytics",
      "Email support",
      "Social media sharing",
      "Campaign duration up to 60 days"
    ],
    limitations: [
      "Limited customization",
      "Basic reporting only"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "$29",
    period: "per month",
    description: "For entrepreneurs and small businesses looking to scale",
    icon: Zap,
    color: "bg-blue-600",
    features: [
      "Unlimited campaigns",
      "3% platform fee",
      "Advanced analytics & insights",
      "Priority email support",
      "Custom branding",
      "Extended campaign duration (90 days)",
      "A/B testing tools",
      "Donor management system",
      "Export data capabilities"
    ],
    limitations: [],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "For large organizations and institutions",
    icon: Crown,
    color: "bg-purple-600",
    features: [
      "Everything in Professional",
      "1% platform fee",
      "Dedicated account manager",
      "24/7 phone support",
      "White-label solution",
      "API access",
      "Custom integrations",
      "Advanced security features",
      "Bulk campaign management",
      "Custom training sessions"
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false
  }
];

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, bank transfers, and various local payment methods depending on your region."
  },
  {
    question: "Can I change my plan at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
  },
  {
    question: "Is there a setup fee?",
    answer: "No, there are no setup fees. You only pay the monthly subscription and platform fees on successful campaigns."
  },
  {
    question: "What happens if I cancel my subscription?",
    answer: "Your active campaigns will continue to run, but you won't be able to create new ones. You can reactivate anytime."
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your crowdfunding needs. Start free and scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              } transition-transform duration-300 hover:scale-105`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${plan.color} rounded-lg mb-4`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.price !== "Free" && (
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Compare all features
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-medium text-gray-900">Features</th>
                  <th className="text-center py-4 px-6 font-medium text-gray-900">Starter</th>
                  <th className="text-center py-4 px-6 font-medium text-gray-900">Professional</th>
                  <th className="text-center py-4 px-6 font-medium text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 text-gray-700">Number of campaigns</td>
                  <td className="py-4 px-6 text-center text-gray-600">3</td>
                  <td className="py-4 px-6 text-center text-gray-600">Unlimited</td>
                  <td className="py-4 px-6 text-center text-gray-600">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">Platform fee</td>
                  <td className="py-4 px-6 text-center text-gray-600">5%</td>
                  <td className="py-4 px-6 text-center text-gray-600">3%</td>
                  <td className="py-4 px-6 text-center text-gray-600">1%</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">Analytics</td>
                  <td className="py-4 px-6 text-center text-gray-600">Basic</td>
                  <td className="py-4 px-6 text-center text-gray-600">Advanced</td>
                  <td className="py-4 px-6 text-center text-gray-600">Advanced</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">Support</td>
                  <td className="py-4 px-6 text-center text-gray-600">Email</td>
                  <td className="py-4 px-6 text-center text-gray-600">Priority Email</td>
                  <td className="py-4 px-6 text-center text-gray-600">24/7 Phone</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">Custom branding</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center">✅</td>
                  <td className="py-4 px-6 text-center">✅</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">API access</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently asked questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of creators who have successfully funded their projects on Fund-Me.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
