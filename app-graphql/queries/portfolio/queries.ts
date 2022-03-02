import { gql } from '@apollo/client';

export const GetPortfolioItemsQuery = gql`
  query ($preview: Boolean) {
    portfolioCollection(preview: $preview) {
      items {
        sys {
          id
        }
        title
        repoUrl
        coverImage {
          url
        }
      }
    }
  }
`;