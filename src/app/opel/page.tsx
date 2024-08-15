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
      <div className="min-h-screen relative bg-[#14181f] bg-grid-white/[0.1]"> {/* Dodanie paddingu od góry */}
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-[#14181f] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,#14181f)]"></div>
        <div className="relative z-20 pt-8">
          <h1 className="text-4xl text-center font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Repair Categories
          </h1>

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
        </div>
      </div>
    </>
  );
}
