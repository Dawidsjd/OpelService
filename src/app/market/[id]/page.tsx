"use client"
import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import NavbarOpel from '@/app/components/Navbar/NavbarOpel'
import SkeletonCard from '@/app/components/ui/SkeletonCard' // Import SkeletonCard
import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from '@/app/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/app/components/ui/carousel"
import { Badge } from "@/app/components/ui/badge"
import { Heart, ShoppingCart, Star } from "lucide-react"

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
  const [quantity, setQuantity] = useState(1)

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
          description: data.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna sit amet nisl fermentum posuere.', // Fallback description
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

  // Generate a list of images for the carousel, adding placeholders if there are less than 3
  const imageList = product?.image ? [product.image] : []
  while (imageList.length < 3) {
    imageList.push('/placeholder.svg')
  }

  return (
    <>
      <NavbarOpel />
      <div className="container mx-auto px-4 text-gray-100 min-h-[90vh] flex justify-center items-center">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
    {/* Product Images */}
    <div className="flex justify-center">
      <Carousel className="w-full max-w-xs mx-auto">
        <CarouselContent>
          {imageList.map((imgSrc, index) => (
            <CarouselItem key={index}>
              <Card className="bg-gray-800">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                    src={imgSrc}
                    alt={`Product image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>

    {/* Product Information */}
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-100">{product?.title || 'Product Title'}</h1>

      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-gray-100">{product?.price.toFixed(2)} PLN</span>
        <Badge variant="secondary" className="bg-gray-700 text-gray-100">-20%</Badge>
        <span className="text-sm text-gray-400 line-through">2499 PLN</span>
      </div>

      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400" />
        ))}
        <span className="text-sm text-gray-400">(128 reviews)</span>
      </div>

      <p className="text-gray-300">
        {product?.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna sit amet nisl fermentum posuere.'}
      </p>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="bg-gray-700 text-gray-100 hover:bg-gray-600"
          >
            -
          </Button>
          <span className="w-12 text-center">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(quantity + 1)}
            className="bg-gray-700 text-gray-100 hover:bg-gray-600"
          >
            +
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
          <Button variant="secondary" className="bg-gray-700 hover:bg-gray-600 text-gray-100">
            <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
          </Button>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ProductDetailPage
