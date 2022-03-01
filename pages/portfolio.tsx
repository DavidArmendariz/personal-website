import { PageHead } from 'app-components';
import { gqlClient } from 'app-graphql/client';
import {
  GetPortfolioItems,
  GetPortfolioItemsResponse,
} from 'app-graphql/queries/portfolio';
import { Portfolio } from 'app-types';
import { NextPage } from 'next';

const Portfolio: NextPage<{ portfolioItems: Portfolio[] }> = ({ portfolioItems }) => {
  return (
    <>
      <PageHead title={'David Armendáriz | Portfolio'} />
      {portfolioItems.map(({ title }) => <div key={title}>{title}</div>)}
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const { data: { portfolioCollection: { items } } } = await gqlClient(preview).query<GetPortfolioItemsResponse>({
    query: GetPortfolioItems,
    variables: {
      preview,
    },
  });
  return {
    props: { preview, portfolioItems: items },
  };
}

export default Portfolio;
