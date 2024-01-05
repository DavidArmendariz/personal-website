import { gql } from '@apollo/client';

export const GetBlogBySlugQuery = gql`
  query ($slug: String!, $height: Dimension!, $width: Dimension!) {
    blogCollection(where: { slug: $slug }) {
      items {
        sys {
          id
        }
        title
        summary
        slug
        coverImage {
          url(transform: { width: $width, height: $height })
        }
        body {
          json
        }
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
        slug
        coverImage {
          url
        }
      }
    }
  }
`;
