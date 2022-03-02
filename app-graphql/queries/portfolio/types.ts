export type GetPortfolioItemsResponse = {
  portfolioCollection: {
    items: Array<{
      sys: { id: string };
      title: string;
      summary: string;
      repoUrl: string;
      coverImage: {
        url: string;
      };
    }>;
  };
};

export type GetPortfolioTransformedResponse = Array<{
  id: string;
  title: string;
  summary: string;
  repoUrl: string;
  coverImage: string;
}>;
