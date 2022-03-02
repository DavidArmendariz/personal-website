import { executeQuery } from 'app-graphql/client';
import { GetPortfolioItemsQuery } from './queries';
import { getPortfolioItemsTransformers } from './transformers';
import {
  GetPortfolioItemsResponse,
  GetPortfolioTransformedResponse,
} from './types';

export const getPortfolioItems = async (preview = false) => {
  const { data, error } = await executeQuery<
    GetPortfolioItemsResponse,
    GetPortfolioTransformedResponse
  >({
    query: GetPortfolioItemsQuery,
    transformer: getPortfolioItemsTransformers,
    preview,
  });

  return { data, error };
};
