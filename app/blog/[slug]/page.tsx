import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import AppText from '@/base-components/AppText';
import client from '@/content/client';
import { TypeBlogSkeleton } from '@/content/types';

const IMAGE_DIMENSIONS = {
  height: 400,
  width: 800,
};

const Blog = async ({ params }: { params: { slug: string } }) => {
  const blogSlug = params.slug;
  const blogEntry =
    await client.withoutUnresolvableLinks.getEntry<TypeBlogSkeleton>(blogSlug);
  const { coverImage, title, summary, body } = blogEntry.fields;
  const coverImageUrl = coverImage?.fields.file?.url || '';

  return (
    <Grid container flexDirection="column" alignItems="center">
      <Grid item>
        <Image
          src={coverImageUrl}
          alt="Blog Cover Image"
          width={IMAGE_DIMENSIONS.width}
          height={IMAGE_DIMENSIONS.height}
        />
      </Grid>
      <Grid item sx={{ maxWidth: IMAGE_DIMENSIONS.width }}>
        <Grid item>
          <AppText variant="h2">{title}</AppText>
        </Grid>
        <Grid item sx={{ pt: 5 }}>
          <AppText variant="h5">{summary}</AppText>
        </Grid>
        <hr />
        <div>{documentToReactComponents(body)}</div>
      </Grid>
    </Grid>
  );
};

export default Blog;
