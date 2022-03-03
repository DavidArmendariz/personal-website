import { executeQuery } from 'app-graphql/client';
import { GetPortfolioItemsQuery } from './queries';
import { getPortfolioItemsTransformer } from './transformers';
import {
  GetPortfolioItemsResponse,
  GetPortfolioItemsTransformedResponse,
} from './types';

export const getPortfolioItems = async ({ preview = false }) => {
  const { data, error } = await executeQuery<
    GetPortfolioItemsResponse,
    GetPortfolioItemsTransformedResponse
  >({
    query: GetPortfolioItemsQuery,
    transformer: getPortfolioItemsTransformer,
    preview,
  });

  return { data, error };
};
