import { executeQuery } from 'app-graphql/client';
import { GetCourseItemsQuery } from './queries';
import { getCourseItemsTransformer } from './transformers';
import {
  GetCourseItemsResponse,
  GetCourseItemsTransformedResponse,
} from './types';

export const getCourseItems = async ({ preview = false }) => {
  const { data, error } = await executeQuery<
    GetCourseItemsResponse,
    GetCourseItemsTransformedResponse
  >({
    query: GetCourseItemsQuery,
    transformer: getCourseItemsTransformer,
    preview,
  });

  return { data, error };
};
