import { gql } from '@apollo/client';

export const GetCourseItemsQuery = gql`
  query ($preview: Boolean) {
    courseCollection(preview: $preview) {
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
