import { NextPage } from 'next';
import { PageHead } from 'app-components';
import { executeQuery } from 'app-graphql/client';
import {
  GetPortfolioItems,
  GetPortfolioItemsResponse,
  GetPortfolioTransformedResponse,
  getPortfolioItemsTransformers,
} from 'app-graphql/queries/portfolio';

const Portfolio: NextPage<{
  portfolioItems: GetPortfolioTransformedResponse;
}> = ({ portfolioItems }) => {
  return (
    <>
      <PageHead title={'David Armendáriz | Portfolio'} />
      {portfolioItems.map(({ title }) => (
        <div key={title}>{title}</div>
      ))}
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const { data } = await executeQuery<
    GetPortfolioItemsResponse,
    GetPortfolioTransformedResponse
  >({ query: GetPortfolioItems, transformer: getPortfolioItemsTransformers });
  console.log(data);
  return {
    props: { preview, portfolioItems: data },
  };
}

export default Portfolio;
