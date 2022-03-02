import { gql } from '@apollo/client';

export const GetPortfolioItems = gql`
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
