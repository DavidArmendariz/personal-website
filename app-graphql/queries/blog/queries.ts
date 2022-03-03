import { gql } from '@apollo/client';

export const GetBlogBySlugQuery = gql`
  query ($slug: String!) {
    blogCollection(where: $slug) {
      items {
        sys {
          id
        }
        title
        summary
        slug
        coverImage
      }
    }
  }
`;

export const GetBlogItemsQuery = gql`
  query ($preview: Boolean) {
    blogCollection(preview: $preview) {
      items {
        sys {
          id
        }
        title
        summary
        coverImage {
          url
        }
      }
    }
  }
`;
