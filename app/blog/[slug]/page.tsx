import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';
import AppText from '@/base-components/AppText';
import client from '@/content/client';
import { TypeBlogSkeleton } from '@/content/types';

const IMAGE_DIMENSIONS = {
  height: 400,
  width: 800,
};

const Blog = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const blogSlug = params.slug;
  const blogEntry =
    await client.withoutUnresolvableLinks.getEntries<TypeBlogSkeleton>({
      content_type: 'blog',
      'fields.slug[in]': [blogSlug],
    });
  const { coverImage, title, summary, body } = blogEntry.items[0].fields;
  const coverImageUrl = coverImage?.fields.file?.url || '';

  return (
    <Grid container flexDirection="column" alignItems="center">
      <Grid>
        <Image
          src={`https:${coverImageUrl}`}
          alt="Blog Cover Image"
          width={IMAGE_DIMENSIONS.width}
          height={IMAGE_DIMENSIONS.height}
          priority={false}
        />
      </Grid>
      <Grid sx={{ maxWidth: IMAGE_DIMENSIONS.width }}>
        <Grid>
          <AppText variant="h2">{title}</AppText>
        </Grid>
        <Grid sx={{ pt: 5 }}>
          <Typography variant="h5" component="div">
            <ReactMarkdown>{summary}</ReactMarkdown>
          </Typography>
        </Grid>
        <hr />
        <div>{documentToReactComponents(body)}</div>
      </Grid>
    </Grid>
  );
};

export default Blog;
