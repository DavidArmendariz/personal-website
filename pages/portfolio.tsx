import { NextPage } from 'next';
import Grid from '@mui/material/Grid';
import { ErrorAlert, PageHead, PortfolioCard } from 'app-components';
import {
  GetPortfolioTransformedResponse,
  getPortfolioItems,
} from 'app-graphql/queries/portfolio';

const Portfolio: NextPage<{
  portfolioItems: GetPortfolioTransformedResponse;
  error: any;
}> = ({ portfolioItems, error }) => {
  if (error) {
    return <ErrorAlert error={error} />;
  }

  return (
    <>
      <PageHead title={'David Armendáriz | Portfolio'} />
      <Grid
        container
        columnSpacing={2}
        sx={{ justifyContent: { xs: 'center', lg: 'flex-start' } }}
      >
        {portfolioItems.map(({ title, id, coverImage, summary, repoUrl }) => (
          <Grid key={id} item xs="auto">
            <PortfolioCard
              title={title}
              coverImage={coverImage}
              summary={summary}
              repoUrl={repoUrl}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const { data, error } = await getPortfolioItems(preview);
  return {
    props: { preview, error, portfolioItems: data },
  };
}

export default Portfolio;
