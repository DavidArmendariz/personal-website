const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID || '';
export const CONTENT_DELIVERY_ACCESS_TOKEN =
  process.env.CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN || '';
export const CONTENT_PREVIEW_ACCESS_TOKEN =
  process.env.CONTENTFUL_CONTENT_PREVIEW_ACCESS_TOKEN || '';
export const GRAPHQL_URL = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`;
