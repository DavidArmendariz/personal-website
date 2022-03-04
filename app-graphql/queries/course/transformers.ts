import {
  GetCourseItemsResponse,
  GetCourseItemsTransformedResponse,
} from './types';

export const getCourseItemsTransformer = (
  data: GetCourseItemsResponse
): GetCourseItemsTransformedResponse => {
  const {
    courseCollection: { items },
  } = data;

  return items.map(({ coverImage, sys, ...rest }) => ({
    ...rest,
    id: sys.id,
    coverImage: coverImage.url,
  }));
};
