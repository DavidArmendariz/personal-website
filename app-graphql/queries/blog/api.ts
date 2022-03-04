import { executeQuery } from 'app-graphql/client';
import { GetBlogBySlugQuery, GetBlogItemsQuery } from './queries';
import {
  getBlogBySlugTransformer,
  getBlogItemsTransformer,
} from './transformers';
import {
  GetBlogBySlugResponse,
  GetBlogBySlugTransformedResponse,
  GetBlogItemsResponse,
  GetBlogItemsTransformedResponse,
} from './types';

export const getBlogItems = async (preview = false) => {
  const { data, error } = await executeQuery<
    GetBlogItemsResponse,
    GetBlogItemsTransformedResponse
  >({
    query: GetBlogItemsQuery,
    transformer: getBlogItemsTransformer,
    preview,
  });

  return { data, error };
};

export const getBlogBySlug = async ({
  preview = false,
  slug,
  height,
  width,
}: {
  preview?: boolean;
  slug: string;
  height: number;
  width: number;
}) => {
  const { data, error } = await executeQuery<
    GetBlogBySlugResponse,
    GetBlogBySlugTransformedResponse
  >({
    query: GetBlogBySlugQuery,
    transformer: getBlogBySlugTransformer,
    preview,
    variables: {
      slug,
      height,
      width,
    },
  });

  return { data, error };
};
