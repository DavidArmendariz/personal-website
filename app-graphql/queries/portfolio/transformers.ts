import {
  GetPortfolioItemsResponse,
  GetPortfolioItemsTransformedResponse,
} from './types';

export const getPortfolioItemsTransformer = (
  data: GetPortfolioItemsResponse
): GetPortfolioItemsTransformedResponse => {
  const {
    portfolioCollection: { items },
  } = data;

  return items.map(({ coverImage, sys, ...rest }) => ({
    ...rest,
    id: sys.id,
    coverImage: coverImage.url,
  }));
};
