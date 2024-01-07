import {
  CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
} from '@/config/env';
import { createClient } from 'contentful';

const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN,
});

export default client;
