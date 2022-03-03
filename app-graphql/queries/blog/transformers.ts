import {
  GetBlogBySlugResponse,
  GetBlogBySlugTransformedResponse,
  GetBlogItemsResponse,
  GetBlogItemsTransformedResponse,
} from './types';

export const getBlogItemsTransformer = (
  data: GetBlogItemsResponse
): GetBlogItemsTransformedResponse => {
  const {
    blogCollection: { items },
  } = data;

  return items.map(({ coverImage, sys, ...rest }) => ({
    ...rest,
    id: sys.id,
    coverImage: coverImage.url,
  }));
};

export const getBlogBySlugTransformer = (
  data: GetBlogBySlugResponse
): GetBlogBySlugTransformedResponse => {
  const {
    blogCollection: { items },
  } = data;

  const {
    coverImage: { url },
    sys: { id },
    ...rest
  } = items[0];
  return {
    ...rest,
    id,
    coverImage: url,
  };
};
