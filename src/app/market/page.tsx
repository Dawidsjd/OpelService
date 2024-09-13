'use client'

import React, { useState, useEffect } from 'react'
import NavbarOpel from '../components/Navbar/NavbarOpel'
import { Search, Filter, Heart } from 'lucide-react'
import SkeletonCard from '../components/ui/SkeletonCard'// Import SkeletonCard

interface Offer {
  id: number
  title: string
  price: number
  image: string
  category: string
}

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [offers, setOffers] = useState<Offer[]>([])
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch('/api/offers')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        console.log('Fetched offers:', data)

        const formattedOffers: Offer[] = data.map((offer: any) => ({
          id: offer.id,
          title: offer.title || 'No Title',
          price: parseFloat(offer.price),
          image: offer.url,
          category: offer.category.charAt(0).toUpperCase() + offer.category.slice(1)
        }))

        setOffers(formattedOffers)
      } catch (error) {
        console.error('Error fetching offers:', error)
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    }

    fetchOffers()
  }, [])

  const filteredOffers = offers.filter(offer =>
    (offer.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === 'All' || offer.category === selectedCategory)
  )

  console.log('Filtered offers:', filteredOffers)

  return (
    <>
      <NavbarOpel />
      <div className="min-h-screen bg-[#141a1e] text-gray-100 bg-grid-white/[0.1] fixed w-full">
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
                  <option>Parts</option>
                  <option>Accessories</option>
                </select>
              </div>
            </div>
            
            {/* Kontener z przewijaniem tylko dla sekcji ofert */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] overflow-y-scroll custom-scrollbar">
              {loading
                ? Array(6).fill(null).map((_, index) => <SkeletonCard key={index} />) // Show skeletons while loading
                : filteredOffers.map((offer) => (
                    <div key={offer.id} className="bg-[#14181f] rounded-lg shadow-md overflow-hidden border border-gray-700">
                      <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2 text-gray-100">{offer.title}</h2>
                        <p className="text-gray-400 mb-2">{offer.price.toFixed(2)} PLN</p>
                        <div className="flex items-center justify-between">
                          <button className="text-red-400 hover:text-red-300 transition-colors duration-200">
                            <Heart size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
              }
            </div>

          </div>
        </main>
      </div>
    </>
  )
}

export default Page
