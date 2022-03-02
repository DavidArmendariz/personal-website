import { NextPage } from 'next';
import { PageHead } from 'app-components';
import {
  GetPortfolioTransformedResponse,
  getPortfolioItems,
} from 'app-graphql/queries/portfolio';

const Portfolio: NextPage<{
  portfolioItems: GetPortfolioTransformedResponse;
}> = ({ portfolioItems }) => {
  return (
    <>
      <PageHead title={'David Armendáriz | Portfolio'} />
      {portfolioItems.map(({ title, id }) => (
        <div key={id}>{title}</div>
      ))}
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const { data } = await getPortfolioItems();
  return {
    props: { preview, portfolioItems: data },
  };
}

export default Portfolio;
