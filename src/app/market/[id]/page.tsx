"use client"
import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import NavbarOpel from '@/app/components/Navbar/NavbarOpel'
import SkeletonCard from '@/app/components/ui/SkeletonCard' // Import SkeletonCard

interface Product {
  id: number
  title: string
  price: number
  image: string
  description: string
}

const ProductDetailPage = () => {
  const { id } = useParams()
  const router = useRouter() // Hook to programmatically navigate
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true) // State to handle loading

  useEffect(() => {
    if (!id) return

    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/offers/${id}`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        console.log('Fetched product:', data)

        if (!data) {
          // Redirect to /market if no product data is returned
          router.push('/market')
          return
        }

        const formattedProduct: Product = {
          id: data.id,
          title: data.title || 'No Title',
          price: parseFloat(data.price),
          image: data.url,  // Use `url` property here
          description: data.description || 'No Description',
        }

        setProduct(formattedProduct)
      } catch (error) {
        console.error('Error fetching product:', error)
        router.push('/market') // Redirect to /market on error
      } finally {
        setLoading(false) // Set loading to false after fetching
      }
    }

    fetchProduct()
  }, [id, router]) // Include router in the dependency array

  return (
    <>
      <NavbarOpel />
      <div className="min-h-screen bg-[#141a1e] text-gray-100 bg-grid-white/[0.1] fixed w-full">
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {loading ? (
              <div className="flex justify-center items-center min-h-[60vh]">
                <SkeletonCard />
              </div>
            ) : product ? (
              <div className="bg-[#14181f] rounded-lg shadow-md overflow-hidden border border-gray-700">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-100">{product.title}</h2>
                  <p className="text-gray-400 mb-2">{product.price.toFixed(2)} PLN</p>
                  <p className="text-gray-300">{product.description}</p>
                </div>
              </div>
            ) : (
              <p className="text-gray-400">Product not found</p>
            )}
          </div>
        </main>
      </div>
    </>
  )
}

export default ProductDetailPage
