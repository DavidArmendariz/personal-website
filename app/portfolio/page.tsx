import { Metadata, NextPage } from 'next';
import Grid from '@mui/material/Grid';
import PortfolioCard from '@/components/PortfolioCard';
import ErrorAlert from '@/components/ErrorAlert';
import {
  GetPortfolioItemsTransformedResponse,
  getPortfolioItems,
} from '@/graphql/queries/portfolio';

export const metadata: Metadata = {
  title: 'David Armendáriz - Portfolio',
};

const Portfolio: NextPage<{
  portfolioItems: GetPortfolioItemsTransformedResponse;
  error: string;
}> = ({ portfolioItems, error }) => {
  if (error) {
    return <ErrorAlert error={error} />;
  }

  return (
    <Grid
      container
      columnSpacing={2}
      sx={{ justifyContent: { xs: 'center', lg: 'flex-start' } }}
      alignItems="stretch"
    >
      {!portfolioItems.length && <span>No portfolio items found</span>}
      {portfolioItems.map(({ title, id, coverImage, summary, repoUrl }) => (
        <Grid key={id} item xs="auto" sx={{ display: 'flex' }}>
          <PortfolioCard
            title={title}
            coverImage={coverImage}
            summary={summary}
            repoUrl={repoUrl}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export async function getStaticProps({ preview = false }) {
  const { data, error } = await getPortfolioItems({ preview });
  return {
    props: { preview, error, portfolioItems: data },
  };
}

export default Portfolio;
