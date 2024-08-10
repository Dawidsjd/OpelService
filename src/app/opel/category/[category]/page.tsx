import Link from 'next/link';
import { client } from '../../../../lib/contentful';
import NavbarOpel from '../../../components/NavbarOpel';

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
      console.log('Fetched category item:', item); // Debug: Wyświetl pobrane dane
      return {
        category: item.fields.category || '',
        categoryIcon: item.fields.categoryIcon?.fields?.file?.url || '',
        titleVideos: Array.isArray(item.fields.titleVideos) ? item.fields.titleVideos : [],
      };
    } else {
      console.error('No items found for category:', category);
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

  return (
    <>
      <NavbarOpel />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8">{item.category} Videos</h1>
        <div className="flex flex-wrap justify-center gap-4 py-10">
          {item.titleVideos.map((title, index) => (
            <div key={index} className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
              <Link
                href={`/opel/category/${encodeURIComponent(category)}/${encodeURIComponent(title)}`}
                className="block transition-transform transform hover:scale-105 cursor-pointer"
              >
                <div className="mockup-window bg-base-300 border">
                  <div className="bg-base-200 flex justify-center px-6 py-24">
                    {title}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
