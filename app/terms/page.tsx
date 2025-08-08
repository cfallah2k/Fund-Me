import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using Fund-Me, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 mb-4">
                Fund-Me is a crowdfunding platform that allows users to create campaigns, donate to causes, and support various projects.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Provide accurate and truthful information</li>
                <li>Respect intellectual property rights</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Maintain the security of your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Campaign Guidelines</h2>
              <p className="text-gray-600 mb-4">
                All campaigns must comply with our community guidelines and applicable laws. Prohibited content includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Illegal activities or products</li>
                <li>Hate speech or discriminatory content</li>
                <li>False or misleading information</li>
                <li>Personal information of others without consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Payment and Fees</h2>
              <p className="text-gray-600 mb-4">
                Fund-Me charges a 5% platform fee on successful campaigns. Payment processing fees may also apply.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Termination</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to terminate or suspend access to our service immediately, without prior notice, for any reason whatsoever.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us at support@fund-me.com
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
