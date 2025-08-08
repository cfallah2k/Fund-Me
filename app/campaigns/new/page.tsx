'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Upload, Globe, Calendar, DollarSign, Users, Target } from 'lucide-react'
import Link from 'next/link'

const CreateCampaignPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    shortDescription: '',
    category: '',
    type: '',
    goalAmount: '',
    currency: 'USD',
    startDate: '',
    endDate: '',
    location: '',
    tags: '',
    images: [] as File[],
    videoUrl: '',
    equityPercentage: '',
    minInvestment: '',
    maxInvestment: '',
    risks: '',
    team: '',
    documents: [] as File[],
  })

  const categories = [
    'Technology',
    'Renewable Energy',
    'Healthcare',
    'Education',
    'Agriculture',
    'Social Cause',
    'Personal Need',
    'Arts & Culture',
    'Sports',
    'Environment',
  ]

  const campaignTypes = [
    { value: 'CROWDFUNDING', label: 'Crowdfunding', description: 'Raise funds from the public' },
    { value: 'EQUITY_OFFERING', label: 'Equity Offering', description: 'Sell shares of your company' },
    { value: 'VENTURE_FUNDING', label: 'Venture Funding', description: 'Seek venture capital investment' },
    { value: 'SOCIAL_CAUSE', label: 'Social Cause', description: 'Fundraising for social impact' },
    { value: 'PERSONAL_NEED', label: 'Personal Need', description: 'Personal fundraising' },
  ]

  const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'NGN', symbol: '₦', name: 'Nigerian Naira' },
    { code: 'KES', symbol: 'KSh', name: 'Kenyan Shilling' },
    { code: 'GHS', symbol: '₵', name: 'Ghanaian Cedi' },
  ]

  const handleInputChange = (field: string, value: string | File[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...files]
      }))
    }
  }

  const handleDocumentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setFormData(prev => ({
        ...prev,
        documents: [...prev.documents, ...files]
      }))
    }
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const steps = [
    { number: 1, title: 'Basic Information', icon: Target },
    { number: 2, title: 'Campaign Details', icon: Globe },
    { number: 3, title: 'Financial Goals', icon: DollarSign },
    { number: 4, title: 'Media & Documents', icon: Upload },
  ]

  return (
    <div className="min-h-screen bg-accent-50">
      {/* Header */}
      <div className="bg-white border-b border-accent-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/discover"
                className="flex items-center space-x-2 text-accent-600 hover:text-accent-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Discover</span>
              </Link>
            </div>
            <h1 className="text-2xl font-bold text-accent-900">
              Create Your Campaign
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center space-x-3 ${
                  currentStep >= step.number ? 'text-primary-600' : 'text-accent-400'
                }`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    currentStep >= step.number 
                      ? 'bg-primary-600 border-primary-600 text-white' 
                      : 'bg-white border-accent-300 text-accent-400'
                  }`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-sm font-medium">{step.title}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-primary-600' : 'bg-accent-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-xl font-semibold text-accent-900 mb-4">
                  Basic Information
                </h2>
                <p className="text-accent-600 mb-6">
                  Start by providing the basic details about your campaign.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-accent-700 mb-2">
                    Campaign Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="Enter your campaign title"
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-accent-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="input-field"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-accent-700 mb-2">
                    Campaign Type *
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => handleInputChange('type', e.target.value)}
                    className="input-field"
                    required
                  >
                    <option value="">Select campaign type</option>
                    {campaignTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label} - {type.description}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-accent-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="City, Country"
                    className="input-field"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-accent-700 mb-2">
                  Short Description *
                </label>
                <textarea
                  value={formData.shortDescription}
                  onChange={(e) => handleInputChange('shortDescription', e.target.value)}
                  placeholder="Brief description of your campaign (max 200 characters)"
                  className="input-field"
                  rows={3}
                  maxLength={200}
                  required
                />
                <div className="text-xs text-accent-500 mt-1">
                  {formData.shortDescription.length}/200 characters
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-accent-700 mb-2">
                  Full Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Tell your story, explain your project, and why people should support you"
                  className="input-field"
                  rows={6}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-accent-700 mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => handleInputChange('tags', e.target.value)}
                  placeholder="Enter tags separated by commas"
                  className="input-field"
                />
                <div className="text-xs text-accent-500 mt-1">
                  Tags help people discover your campaign
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Campaign Details */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-xl font-semibold text-accent-900 mb-4">
                  Campaign Details
                </h2>
                <p className="text-accent-600 mb-6">
                  Set your campaign timeline and additional details.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-accent-700 mb-2">
                    Start Date *
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-accent-700 mb-2">
                    End Date *
                  </label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    className="input-field"
                    required
                  />
                </div>
              </div>

              {formData.type === 'EQUITY_OFFERING' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-accent-700 mb-2">
                      Equity Percentage *
                    </label>
                    <input
                      type="number"
                      value={formData.equityPercentage}
                      onChange={(e) => handleInputChange('equityPercentage', e.target.value)}
                      placeholder="e.g., 10"
                      className="input-field"
                      min="0"
                      max="100"
                      step="0.1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-accent-700 mb-2">
                      Minimum Investment *
                    </label>
                    <input
                      type="number"
                      value={formData.minInvestment}
                      onChange={(e) => handleInputChange('minInvestment', e.target.value)}
                      placeholder="e.g., 1000"
                      className="input-field"
                      min="0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-accent-700 mb-2">
                      Maximum Investment
                    </label>
                    <input
                      type="number"
                      value={formData.maxInvestment}
                      onChange={(e) => handleInputChange('maxInvestment', e.target.value)}
                      placeholder="e.g., 50000"
                      className="input-field"
                      min="0"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-accent-700 mb-2">
                  Risks & Challenges
                </label>
                <textarea
                  value={formData.risks}
                  onChange={(e) => handleInputChange('risks', e.target.value)}
                  placeholder="Describe potential risks and challenges, and how you plan to address them"
                  className="input-field"
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-accent-700 mb-2">
                  Team Information
                </label>
                <textarea
                  value={formData.team}
                  onChange={(e) => handleInputChange('team', e.target.value)}
                  placeholder="Tell us about your team, experience, and qualifications"
                  className="input-field"
                  rows={4}
                />
              </div>
            </motion.div>
          )}

          {/* Step 3: Financial Goals */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-xl font-semibold text-accent-900 mb-4">
                  Financial Goals
                </h2>
                <p className="text-accent-600 mb-6">
                  Set your funding goal and currency.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-accent-700 mb-2">
                    Funding Goal *
                  </label>
                  <input
                    type="number"
                    value={formData.goalAmount}
                    onChange={(e) => handleInputChange('goalAmount', e.target.value)}
                    placeholder="Enter your funding goal"
                    className="input-field"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-accent-700 mb-2">
                    Currency *
                  </label>
                  <select
                    value={formData.currency}
                    onChange={(e) => handleInputChange('currency', e.target.value)}
                    className="input-field"
                    required
                  >
                    {currencies.map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency.symbol} {currency.name} ({currency.code})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">
                  💡 Tips for Setting Your Goal
                </h3>
                <ul className="space-y-2 text-sm text-primary-700">
                  <li>• Research similar campaigns to understand realistic goals</li>
                  <li>• Consider all costs including platform fees (5%)</li>
                  <li>• Set a minimum viable goal and stretch goals</li>
                  <li>• Be transparent about how funds will be used</li>
                </ul>
              </div>
            </motion.div>
          )}

          {/* Step 4: Media & Documents */}
          {currentStep === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-xl font-semibold text-accent-900 mb-4">
                  Media & Documents
                </h2>
                <p className="text-accent-600 mb-6">
                  Add images, videos, and documents to make your campaign compelling.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-accent-700 mb-2">
                  Campaign Images *
                </label>
                <div className="border-2 border-dashed border-accent-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-accent-400 mx-auto mb-4" />
                  <p className="text-accent-600 mb-2">
                    Upload high-quality images for your campaign
                  </p>
                  <p className="text-sm text-accent-500 mb-4">
                    PNG, JPG up to 10MB each. First image will be your cover.
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="btn-primary cursor-pointer"
                  >
                    Choose Images
                  </label>
                </div>
                {formData.images.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-accent-600 mb-2">
                      {formData.images.length} image(s) selected
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {formData.images.map((file, index) => (
                        <div key={index} className="text-xs text-accent-500">
                          {file.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-accent-700 mb-2">
                  Video URL
                </label>
                <input
                  type="url"
                  value={formData.videoUrl}
                  onChange={(e) => handleInputChange('videoUrl', e.target.value)}
                  placeholder="YouTube, Vimeo, or other video URL"
                  className="input-field"
                />
                <div className="text-xs text-accent-500 mt-1">
                  A video can significantly increase your campaign's success rate
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-accent-700 mb-2">
                  Supporting Documents
                </label>
                <div className="border-2 border-dashed border-accent-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-accent-400 mx-auto mb-4" />
                  <p className="text-accent-600 mb-2">
                    Upload business plans, financial projections, or other documents
                  </p>
                  <p className="text-sm text-accent-500 mb-4">
                    PDF, DOC up to 10MB each
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx"
                    onChange={handleDocumentUpload}
                    className="hidden"
                    id="document-upload"
                  />
                  <label
                    htmlFor="document-upload"
                    className="btn-outline cursor-pointer"
                  >
                    Choose Documents
                  </label>
                </div>
                {formData.documents.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-accent-600 mb-2">
                      {formData.documents.length} document(s) selected
                    </p>
                    <div className="space-y-1">
                      {formData.documents.map((file, index) => (
                        <div key={index} className="text-xs text-accent-500">
                          {file.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-8 border-t border-accent-200">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
                currentStep === 1
                  ? 'bg-accent-100 text-accent-400 cursor-not-allowed'
                  : 'bg-white border border-accent-300 text-accent-700 hover:bg-accent-50'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="px-6 py-3 border border-accent-300 text-accent-700 rounded-lg hover:bg-accent-50 transition-colors"
              >
                Save Draft
              </button>
              
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="btn-primary flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn-primary flex items-center space-x-2"
                >
                  <span>Launch Campaign</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateCampaignPage
