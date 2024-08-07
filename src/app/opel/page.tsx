// src/app/page.tsx
import { createClient } from 'contentful';
import NavbarOpel from '../components/NavbarOpel';

// Item interface
interface Item {
  category: string;
  titleVideos: string[];
  contentVideos: string[];
  urlVideos: string[];
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
  // Simulate loading delay
  await delay(2000); // 2 seconds delay

  try {
    const res = await client.getEntries({ content_type: 'repair' });

    // Log to check the structure
    console.log('Contentful response:', res.items);

    const items: Item[] = res.items.map((item: any) => {
      console.log('Item fields:', item.fields);
      return {
        category: item.fields.category || '',
        titleVideos: item.fields.titleVideos || [],
        contentVideos: item.fields.contentVideos || [],
        urlVideos: item.fields.urlVideos || [],
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
      <h1 className="text-4xl font-bold text-center my-8">Repair Videos</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div key={index} className="card bg-base-100 shadow-xl p-4">
              <div className="card-body">
                {item.titleVideos && item.contentVideos && item.urlVideos && item.titleVideos.map((title, titleIndex) => {
                  const content = item.contentVideos[titleIndex] || ''; // Default to empty string if undefined
                  const videoUrl = item.urlVideos[titleIndex] || ''; // Default to empty string if undefined

                  return (
                    <div key={titleIndex} className="mb-8">
                      <h3 className="text-lg font-semibold mb-2">Title:</h3>
                      <p className="text-lg mb-4">{title}</p>

                      <h3 className="text-lg font-semibold mb-2">Video Content:</h3>
                      <p className="text-base mb-4">{content}</p>

                      {videoUrl && (
                        <div className="my-4">
                          <iframe
                            src={videoUrl}
                            width="100%"
                            height="315"
                            frameBorder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      )}

                      {/* Add separator only if there are more videos */}
                      {titleIndex < (item.titleVideos.length - 1) && (
                        <hr className="my-4" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
