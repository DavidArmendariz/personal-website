import { gql } from '@apollo/client';
import { Portfolio } from 'app-types';

export type GetPortfolioItemsResponse = {
  portfolioCollection: {
    items: Array<Portfolio>;
  };
};

export const GetPortfolioItems = gql`
  query ($preview: Boolean) {
    portfolioCollection(preview: $preview) {
      items {
        title
      }
    }
  }
`;
