// src/app/page.tsx

import React, { Suspense } from 'react';
import { client } from '../../lib/contentful';
import NavbarOpel from '../components/NavbarOpel';
import AnimatedCard from '../components/ui/AnimatedCard';
import SkeletonCard from '../components/ui/SkeletonCard';

// Item interface
interface Item {
  category: string;
  categoryIcon: string;
  titleVideos: string[];
  contentVideos: string[];
}

// Helper function to add delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Funkcja do pobierania danych z Contentful z opóźnieniem
async function fetchContentfulData(): Promise<Item[]> {
  await delay(2000); // Opóźnienie 2 sekundy, aby skeleton był dłużej widoczny

  const res = await client.getEntries({ content_type: 'repair' });

  const items: Item[] = res.items.map((item: any) => {
    const categoryIconUrl = item.fields.categoryIcon?.fields?.file?.url
      ? `https:${item.fields.categoryIcon.fields.file.url}`
      : '';

    return {
      category: item.fields.category || '',
      categoryIcon: categoryIconUrl,
      titleVideos: item.fields.titleVideos || [],
      contentVideos: item.fields.contentVideos || [],
    };
  }).sort((a, b) => b.category.localeCompare(a.category));

  return items;
}

// Komponent do renderowania kart z Contentful
async function RepairCategories() {
  const items = await fetchContentfulData();
  

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-11">
        {items.map((item, index) => (
          <div key={index}>
            <AnimatedCard
              category={item.category}
              categoryIcon={item.categoryIcon}
              titleVideoCount={item.titleVideos.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Główny komponent strony
export default function Home() {
  return (
    <>
  <NavbarOpel />
  <h1 className="text-4xl font-bold text-center my-8">Repair Categories</h1>

  <div className="flex justify-center mb-8">
    <div className="divider w-3/5"></div>
  </div>
  
  <Suspense fallback={
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-11">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  }>
    <RepairCategories />
  </Suspense>
</>

  );
}
