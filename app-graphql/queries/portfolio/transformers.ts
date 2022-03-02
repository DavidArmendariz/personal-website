import {
  GetPortfolioItemsResponse,
  GetPortfolioTransformedResponse,
} from './types';

export const getPortfolioItemsTransformers = (
  data: GetPortfolioItemsResponse
): GetPortfolioTransformedResponse => {
  const {
    portfolioCollection: { items },
  } = data;

  return items.map(({ coverImage, sys, ...rest }) => ({
    ...rest,
    id: sys.id,
    coverImage: coverImage.url,
  }));
};
