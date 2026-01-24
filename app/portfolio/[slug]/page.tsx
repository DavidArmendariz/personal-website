import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';
import AppText from '@/base-components/AppText';
import client from '@/content/client';
import { TypePortfolioSkeleton } from '@/content/types';
import ExternalLink from '@/components/ExternalLink';

const IMAGE_DIMENSIONS = {
  height: 400,
  width: 800,
};

const PortfolioDetail = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const params = await props.params;
  const portfolioSlug = params.slug;
  const portfolioEntry =
    await client.withoutUnresolvableLinks.getEntries<TypePortfolioSkeleton>({
      content_type: 'portfolio',
      'fields.slug[in]': [portfolioSlug],
    });

  if (!portfolioEntry.items.length) {
    return <div>Project not found</div>;
  }

  const { coverImage, title, summary, siteUrl } =
    portfolioEntry.items[0].fields;
  const coverImageUrl = coverImage?.fields.file?.url || '';

  console.log(summary);

  return (
    <Grid container flexDirection="column" alignItems="center" gap={3}>
      <Grid sx={{ maxWidth: '100%' }}>
        {coverImageUrl && (
          <Image
            src={`https:${coverImageUrl}`}
            alt={title}
            width={IMAGE_DIMENSIONS.width}
            height={IMAGE_DIMENSIONS.height}
            style={{
              objectFit: 'contain',
              borderRadius: '8px',
              backgroundColor: 'rgba(0,0,0,0.05)',
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        )}
      </Grid>
      <Grid sx={{ maxWidth: IMAGE_DIMENSIONS.width, width: '100%' }}>
        <Grid>
          <AppText variant="h2">{title}</AppText>
        </Grid>
        <Grid sx={{ pt: 2 }}>
          <Typography variant="body1" component="div">
            <ReactMarkdown>{summary}</ReactMarkdown>
          </Typography>
        </Grid>
        <Grid container gap={2} sx={{ pt: 4 }}>
          {siteUrl && (
            <ExternalLink href={siteUrl}>Visit Live Site</ExternalLink>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PortfolioDetail;
