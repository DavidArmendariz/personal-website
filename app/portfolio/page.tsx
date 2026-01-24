import { Metadata } from 'next';
import Grid from '@mui/material/Grid';
import PortfolioCard from '@/components/PortfolioCard';
import { TypePortfolioSkeleton } from '@/content/types';
import client from '@/content/client';

export const metadata: Metadata = {
  title: 'David Armendáriz - Portfolio',
  description: "Projects I've worked on",
};

const Page = async () => {
  const portfolioEntries =
    await client.withoutUnresolvableLinks.getEntries<TypePortfolioSkeleton>({
      content_type: 'portfolio',
    });

  const portfolioItems = portfolioEntries.items;

  return (
    <Grid
      container
      columnSpacing={2}
      rowSpacing={2}
      sx={{ justifyContent: { xs: 'center', lg: 'flex-start' } }}
      alignItems="stretch"
    >
      {portfolioItems.length ? (
        portfolioItems.map((portfolioItem, index) => {
          const { title, coverImage, summary, slug } =
            portfolioItem.fields;
          const coverImageUrl = coverImage?.fields.file?.url;
          return (
            <Grid
              key={`${title}-${index}`}
              item
              xs="auto"
              sx={{ display: 'flex' }}
            >
              <PortfolioCard
                title={title}
                coverImage={coverImageUrl}
                summary={summary}
                slug={slug || portfolioItem.sys.id}
              />
            </Grid>
          );
        })
      ) : (
        <span>No portfolio items found</span>
      )}
    </Grid>
  );
};

export default Page;
