export type GetCourseItemsResponse = {
  courseCollection: {
    items: Array<{
      sys: { id: string };
      title: string;
      summary: string;
      coverImage: {
        url: string;
      };
    }>;
  };
};

export type GetCourseItemsTransformedResponse = Array<{
  id: string;
  title: string;
  summary: string;
  coverImage: string;
}>;
