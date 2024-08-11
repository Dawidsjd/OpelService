import React, { Suspense } from 'react';
import { client } from '../../../../../lib/contentful';
import NavbarOpel from '../../../../components/NavbarOpel';
import Loading from '@/app/loading';
// Interfejs Item
interface Item {
    category: string;
    titleVideos: string[];
    urlVideos: string[];
    contentVideos: string[];
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
                titleVideos: Array.isArray(item.fields.titleVideos) ? item.fields.titleVideos : [],
                urlVideos: Array.isArray(item.fields.urlVideos) ? item.fields.urlVideos : [],
                contentVideos: Array.isArray(item.fields.contentVideos) ? item.fields.contentVideos : [],
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

// Komponent do renderowania szczegółów video
async function VideoContent({ category, titleVideo }: { category: string, titleVideo: string }) {
    const item = await fetchCategoryData(category);

    if (!item) {
        return (
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center my-8">Category not found</h1>
            </div>
        );
    }

    const isTitleFound = item.titleVideos.includes(titleVideo);
    const videoUrl = isTitleFound ? item.urlVideos[item.titleVideos.indexOf(titleVideo)] : '';
    const contentVideo = isTitleFound ? item.contentVideos[item.titleVideos.indexOf(titleVideo)] : '';

    return (
        <div className="container mx-auto p-10">
            <div className="mockup-window bg-base-300">
                <div className="bg-base-200 flex justify-center p-4">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-bold my-10">
                            {isTitleFound ? titleVideo : 'Title not found'}
                        </h1>
                        {isTitleFound && videoUrl && (
                            <div className="flex justify-center mb-10 w-full">
                                <video controls className="max-w-full w-80 md:w-96 lg:w-2/4 xl:w-2/4 rounded-lg" src={videoUrl}>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )}
                        {contentVideo && (
                            <div className="prose mx-auto mb-10">
                                <p>{contentVideo}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Funkcja komponentu strony
export default function VideoDetailPage({ params }: { params: { category: string; titleVideo: string } }) {
    const category = decodeURIComponent(params.category);
    const titleVideo = decodeURIComponent(params.titleVideo);

    return (
        <>
            <NavbarOpel />
            <Suspense fallback={
                <div className="flex items-center justify-center h-screen">
                    <Loading />
                </div>
            }>
                <VideoContent category={category} titleVideo={titleVideo} />
            </Suspense>
        </>
    );
}
