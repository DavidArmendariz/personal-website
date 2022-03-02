import { executeQuery } from 'app-graphql/client';
import { GetPortfolioItemsQuery } from './queries';
import { getPortfolioItemsTransformers } from './transformers';
import {
  GetPortfolioItemsResponse,
  GetPortfolioTransformedResponse,
} from './types';

export const getPortfolioItems = async () => {
  const { data } = await executeQuery<
    GetPortfolioItemsResponse,
    GetPortfolioTransformedResponse
  >({
    query: GetPortfolioItemsQuery,
    transformer: getPortfolioItemsTransformers,
  });

  return { data };
};
