import { createClient } from 'contentful';
import NavbarOpel from '../components/NavbarOpel';
import AnimatedCard from '../components/AnimatedCard'; // Import AnimatedCard

// Item interface
interface Item {
  category: string;
  categoryIcon: string;
  titleVideos: string[]; // Add titleVideos to Item
}

// Contentful client setup
const spaceId = process.env.CONTENTFUL_SPACE_ID!;
const accessToken = process.env.CONTENTFUL_ACCESS_KEY!;

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

// Helper function to add delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Function to fetch data from Contentful with added delay
async function fetchContentfulData(): Promise<Item[]> {
  await delay(2000); // 2 seconds delay

  try {
    const res = await client.getEntries({ content_type: 'repair' });

    const items: Item[] = res.items.map((item: any) => {
      const categoryIconUrl = item.fields.categoryIcon?.fields?.file?.url
        ? `https:${item.fields.categoryIcon.fields.file.url}`
        : '';

      return {
        category: item.fields.category || '',
        categoryIcon: categoryIconUrl,
        titleVideos: item.fields.titleVideos || [], // Add titleVideos
      };
    }).sort((a, b) => {
      return b.category.localeCompare(a.category); // Sort alphabetically by category
    });

    return items;
  } catch (error) {
    console.error('Error fetching data from Contentful:', error);
    return [];
  }
}

// Main component
export default async function Home() {
  const items = await fetchContentfulData();

  return (
    <>
      <NavbarOpel />
      <h1 className="text-4xl font-bold text-center my-8">Repair Categories</h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-11">
          {items.map((item, index) => (
            <div key={index}>
              <AnimatedCard
                category={item.category}
                categoryIcon={item.categoryIcon}
                titleVideoCount={item.titleVideos.length} // Pass the count to AnimatedCard
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
