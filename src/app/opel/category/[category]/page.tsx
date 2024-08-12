import React, { Suspense } from 'react';
import Link from 'next/link';
import { client } from '../../../../lib/contentful';
import NavbarOpel from '../../../components/NavbarOpel';
import SkeletonCard from '../../../components/ui/SkeletonCard';
import { IconStar } from '@tabler/icons-react';

// Interfejs Item
interface Item {
  category: string;
  categoryIcon: string;
  titleVideos: string[];
}

// Funkcja do pobierania danych dla konkretnej kategorii
async function fetchCategoryData(category: string): Promise<Item | null> {
  try {
    const res = await client.getEntries({
      content_type: 'repair',
      'fields.category': category,
    });

    if (res.items.length > 0) {
      const item = res.items[0] as any;
      return {
        category: item.fields.category || '',
        categoryIcon: item.fields.categoryIcon?.fields?.file?.url || '',
        titleVideos: Array.isArray(item.fields.titleVideos) ? item.fields.titleVideos : [],
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching data from Contentful:', error);
    return null;
  }
}

// Komponent do renderowania zawartości kategorii
async function CategoryContent({ category }: { category: string }) {
  const item = await fetchCategoryData(category);

  if (!item) {
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8">Category not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">{item.category} Videos</h1>
      <div className="flex flex-wrap justify-center gap-4 py-10">
        {item.titleVideos.map((title, index) => (
          <div key={index} className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 relative">
            <Link
              href={`/opel/category/${encodeURIComponent(category)}/${encodeURIComponent(title)}`}
              className="block transition-transform transform hover:scale-105 cursor-pointer"
            >
              <div className="mockup-window bg-base-300 relative">
                {/* IconStar in the top-right corner */}
                <div className="absolute top-3 right-3 p-1">
                  <IconStar size={20} className="text-gray-500 transition-colors duration-300 hover:text-yellow-500" />
                </div>
                <div className="bg-base-200 font-bold flex justify-center px-6 py-24">
                  {title}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Funkcja komponentu strony
export default async function CategoryPage({ params }: { params: { category: string } }) {
  const category = decodeURIComponent(params.category);
  const item = await fetchCategoryData(category); // Pobierz dane kategorii, aby użyć ich w Skeleton

  const skeletonCount = item?.titleVideos.length || 4; // Użyj liczby elementów z titleVideos lub 4 jako fallback

  return (
    <>
      <NavbarOpel />
      <Suspense fallback={
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 py-10">
            {Array.from({ length: skeletonCount }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </div>
      }>
        <CategoryContent category={category} />
      </Suspense>
    </>
  );
}
