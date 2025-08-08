'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Filter, DollarSign, MapPin, Calendar, Users } from 'lucide-react'

const FilterSidebar = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 1000000])
  const [daysLeft, setDaysLeft] = useState<number | null>(null)

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

  const types = [
    'Crowdfunding',
    'Equity Offering',
    'Venture Funding',
    'Social Cause',
    'Personal Need',
    'Reward-based',
  ]

  const locations = [
    'Nigeria',
    'Kenya',
    'Ghana',
    'Uganda',
    'Tanzania',
    'South Africa',
    'Ethiopia',
    'Rwanda',
    'Senegal',
    'Morocco',
  ]

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const handleTypeToggle = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    )
  }

  const handleLocationToggle = (location: string) => {
    setSelectedLocations(prev =>
      prev.includes(location)
        ? prev.filter(l => l !== location)
        : [...prev, location]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedTypes([])
    setSelectedLocations([])
    setPriceRange([0, 1000000])
    setDaysLeft(null)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-accent-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-accent-900 flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filters
        </h3>
        <button
          onClick={clearFilters}
          className="text-sm text-primary-600 hover:text-primary-700"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h4 className="font-medium text-accent-900 mb-3">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                  className="w-4 h-4 text-primary-600 border-accent-300 rounded focus:ring-primary-500"
                />
                <span className="text-sm text-accent-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Campaign Types */}
        <div>
          <h4 className="font-medium text-accent-900 mb-3">Campaign Types</h4>
          <div className="space-y-2">
            {types.map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleTypeToggle(type)}
                  className="w-4 h-4 text-primary-600 border-accent-300 rounded focus:ring-primary-500"
                />
                <span className="text-sm text-accent-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div>
          <h4 className="font-medium text-accent-900 mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Locations
          </h4>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {locations.map((location) => (
              <label key={location} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedLocations.includes(location)}
                  onChange={() => handleLocationToggle(location)}
                  className="w-4 h-4 text-primary-600 border-accent-300 rounded focus:ring-primary-500"
                />
                <span className="text-sm text-accent-700">{location}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="font-medium text-accent-900 mb-3 flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            Goal Amount
          </h4>
          <div className="space-y-3">
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="flex-1 px-3 py-2 border border-accent-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <input
                type="number"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="flex-1 px-3 py-2 border border-accent-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div className="text-xs text-accent-500">
              Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
            </div>
          </div>
        </div>

        {/* Days Left */}
        <div>
          <h4 className="font-medium text-accent-900 mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Days Left
          </h4>
          <select
            value={daysLeft || ''}
            onChange={(e) => setDaysLeft(e.target.value ? Number(e.target.value) : null)}
            className="w-full px-3 py-2 border border-accent-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Any time</option>
            <option value="7">Less than 7 days</option>
            <option value="15">Less than 15 days</option>
            <option value="30">Less than 30 days</option>
            <option value="60">Less than 60 days</option>
          </select>
        </div>

        {/* Verification Status */}
        <div>
          <h4 className="font-medium text-accent-900 mb-3">Verification</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-primary-600 border-accent-300 rounded focus:ring-primary-500"
              />
              <span className="text-sm text-accent-700">Verified campaigns only</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-primary-600 border-accent-300 rounded focus:ring-primary-500"
              />
              <span className="text-sm text-accent-700">Featured campaigns</span>
            </label>
          </div>
        </div>

        {/* Backers */}
        <div>
          <h4 className="font-medium text-accent-900 mb-3 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Backers
          </h4>
          <select className="w-full px-3 py-2 border border-accent-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
            <option>Any number</option>
            <option>10+ backers</option>
            <option>50+ backers</option>
            <option>100+ backers</option>
            <option>500+ backers</option>
          </select>
        </div>
      </div>

      {/* Apply Filters Button */}
      <div className="mt-6 pt-6 border-t border-accent-200">
        <button className="btn-primary w-full">
          Apply Filters
        </button>
      </div>
    </div>
  )
}

export default FilterSidebar
