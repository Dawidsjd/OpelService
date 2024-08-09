import { client } from '../../../../lib/contentful';
import NavbarOpel from '../../../components/NavbarOpel';
import { HoverEffect } from '../../../components/ui/CardHoverEffect';

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

    // Sprawdź, czy istnieją dane
    if (res.items.length > 0) {
      const item = res.items[0] as any; // Typuj jako `any` na potrzeby tymczasowe
      return {
        category: item.fields.category || '',
        categoryIcon: item.fields.categoryIcon?.fields?.file?.url || '',
        titleVideos: Array.isArray(item.fields.titleVideos) ? item.fields.titleVideos : [], // Upewnij się, że to tablica
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching data from Contentful:', error);
    return null;
  }
}

// Generowanie statycznych parametrów
export async function generateStaticParams() {
  try {
    const res = await client.getEntries({ content_type: 'repair' });
    const categories = res.items.map((item: any) => item.fields.category).filter(Boolean);

    return categories.map((category: string) => ({
      category: encodeURIComponent(category),
    }));
  } catch (error) {
    console.error('Error fetching paths:', error);
    return [];
  }
}

// Funkcja komponentu strony
export default async function CategoryPage({ params }: { params: { category: string } }) {
  const category = decodeURIComponent(params.category);
  const item = await fetchCategoryData(category);

  if (!item) {
    return (
      <>
        <NavbarOpel />
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center my-8">Category not found</h1>
        </div>
      </>
    );
  }

  // Przekształć tytuły w format dla HoverEffect
  const hoverItems = item.titleVideos.map((title, index) => ({
    title,
    description: title, // Możesz dostosować opis
    link: `www.youtube.com`, // Zastąp linkiem do strony filmu, jeśli to konieczne
  }));

  return (
    <>
      <NavbarOpel />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8">{item.category} Videos</h1>
        <HoverEffect items={hoverItems} className="py-10" />
      </div>
    </>
  );
}
