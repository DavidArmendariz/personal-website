import { Document } from '@contentful/rich-text-types';

export type GetBlogBySlugResponse = {
  blogCollection: {
    items: Array<{
      sys: {
        id: string;
      };
      title: string;
      summary: string;
      slug: string;
      coverImage: {
        url: string;
      };
      body: {
        json: Document;
      };
    }>;
  };
};

export type GetBlogBySlugTransformedResponse = {
  id: string;
  title: string;
  summary: string;
  coverImage: string;
  slug: string;
  body: Document;
};

export type GetBlogItemsResponse = {
  blogCollection: {
    items: Array<{
      sys: { id: string };
      title: string;
      summary: string;
      body: string;
      slug: string;
      coverImage: {
        url: string;
      };
    }>;
  };
};

export type GetBlogItemsTransformedResponse = Array<{
  id: string;
  title: string;
  slug: string;
  summary: string;
  body: string;
  coverImage: string;
}>;
