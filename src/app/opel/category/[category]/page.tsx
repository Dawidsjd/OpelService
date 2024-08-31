import React, { Suspense } from 'react';
import Link from 'next/link';
import { client } from '../../../../lib/contentful';
import NavbarOpel from '../../../components/Navbar/NavbarOpel';
import SkeletonCard from '../../../components/ui/SkeletonCard';
import MockupWindow from '../../../components/ui/MockupWindow'; // Import nowego komponentu

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
      <div className="flex justify-center mb-8">
        <div className="divider w-3/5"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-10">
        {item.titleVideos.map((title, index) => (
          <MockupWindow key={index} category={category} title={title} index={index} />
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
