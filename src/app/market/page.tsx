'use client'

import React, { useState } from 'react'
import NavbarOpel from '../components/Navbar/NavbarOpel'
import { Search, Filter, Star, Heart } from 'lucide-react'

// Mock data for offers
const offers = [
  { id: 1, title: 'Smartphone X', price: 599, rating: 4.5, image: '/placeholder.svg?height=200&width=200' },
  { id: 2, title: 'Laptop Pro', price: 1299, rating: 4.8, image: '/placeholder.svg?height=200&width=200' },
  { id: 3, title: 'Wireless Earbuds', price: 129, rating: 4.2, image: '/placeholder.svg?height=200&width=200' },
  { id: 4, title: 'Smart Watch', price: 249, rating: 4.6, image: '/placeholder.svg?height=200&width=200' },
  { id: 5, title: 'Gaming Console', price: 499, rating: 4.7, image: '/placeholder.svg?height=200&width=200' },
  { id: 6, title: 'Digital Camera', price: 699, rating: 4.4, image: '/placeholder.svg?height=200&width=200' },
]

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredOffers = offers.filter(offer =>
    offer.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || offer.title.includes(selectedCategory))
  )

  return (
    <>
      <NavbarOpel />
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
                <input
                  type="text"
                  placeholder="Search offers..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
              <div className="flex items-center">
                <Filter className="mr-2 text-gray-400" size={20} />
                <select
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option>All</option>
                  <option>Smartphone</option>
                  <option>Laptop</option>
                  <option>Earbuds</option>
                  <option>Watch</option>
                  <option>Console</option>
                  <option>Camera</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOffers.map((offer) => (
                <div key={offer.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700">
                  <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 text-gray-100">{offer.title}</h2>
                    <p className="text-gray-400 mb-2">${offer.price}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="text-yellow-400 mr-1" size={16} />
                        <span className="text-gray-300">{offer.rating}</span>
                      </div>
                      <button className="text-red-400 hover:text-red-300 transition-colors duration-200">
                        <Heart size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Page