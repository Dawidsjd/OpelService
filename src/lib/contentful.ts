import { createClient } from 'contentful';

// Sprawdź, czy zmienne środowiskowe są dostępne
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_KEY;

if (!spaceId || !accessToken) {
  throw new Error('Contentful space ID or access token is missing');
}

export const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});
