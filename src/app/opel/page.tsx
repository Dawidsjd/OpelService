// src/app/page.tsx
import { createClient } from 'contentful';
import Image from 'next/image';
import NavbarOpel from '../components/NavbarOpel';

// Item interface
interface Item {
  model: string;
  url: string;
  photo: {
    fields: {
      file: {
        url: string;
      };
    };
  };
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
  await delay(2000); // 20 seconds delay

  const res = await client.getEntries({ content_type: 'opelCar' });

  const items = res.items.map((item: any) => ({
    model: item.fields.model,
    url: item.fields.url,
    photo: item.fields.photo,
  }));

  return items;
}

// Helper function to convert YouTube URL to embed URL
function getYouTubeEmbedUrl(url: string): string {
  const videoId = url.split('v=')[1];
  const ampersandPosition = videoId.indexOf('&');
  if (ampersandPosition !== -1) {
    return `https://www.youtube.com/embed/${videoId.substring(0, ampersandPosition)}`;
  }
  return `https://www.youtube.com/embed/${videoId}`;
}

// Main component
export default async function Home() {
  const items = await fetchContentfulData();

  return (
    <>
      <NavbarOpel/>
      <h1 className="text-4xl font-bold text-center my-8">Opel Cars</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <figure className="p-4">
                {item.photo && item.photo.fields.file.url && (
                  <Image
                    src={`https:${item.photo.fields.file.url}`}
                    alt={item.model}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                )}
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-bold">{item.model}</h2>
                {item.url && (
                  <div className="my-4">
                    <iframe
                      src={getYouTubeEmbedUrl(item.url)}
                      width="100%"
                      height="315"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
