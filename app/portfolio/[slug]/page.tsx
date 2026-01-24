import Image from 'next/image';
import Grid from '@mui/material/Grid';
import AppText from '@/base-components/AppText';
import client from '@/content/client';
import { TypePortfolioSkeleton } from '@/content/types';
import ExternalLink from '@/components/ExternalLink';

const IMAGE_DIMENSIONS = {
  height: 400,
  width: 800,
};

const PortfolioDetail = async ({ params }: { params: { slug: string } }) => {
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

  return (
    <Grid container flexDirection="column" alignItems="center" gap={3}>
      <Grid item>
        {coverImageUrl && (
          <Image
            src={`https:${coverImageUrl}`}
            alt={title}
            width={IMAGE_DIMENSIONS.width}
            height={IMAGE_DIMENSIONS.height}
            style={{ objectFit: 'cover', borderRadius: '8px' }}
          />
        )}
      </Grid>
      <Grid item sx={{ maxWidth: IMAGE_DIMENSIONS.width, width: '100%' }}>
        <Grid item>
          <AppText variant="h2">{title}</AppText>
        </Grid>
        <Grid item sx={{ pt: 2 }}>
          <AppText variant="body1">{summary}</AppText>
        </Grid>
        <Grid container gap={2} sx={{ pt: 4 }}>
          {siteUrl && <ExternalLink href={siteUrl}>Visit Live Site</ExternalLink>}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PortfolioDetail;
