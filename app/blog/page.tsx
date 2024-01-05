import { Metadata, NextPage } from 'next';
import Grid from '@mui/material/Grid';
import ErrorAlert from '@/components/ErrorAlert';
import BlogCard from '@/components/BlogCard';
import {
  GetBlogItemsTransformedResponse,
  getBlogItems,
} from '@/graphql/queries/blog';

export const metadata: Metadata = {
  title: 'David Armendáriz - Blog',
};

const BlogIndex: NextPage<{
  blogItems: GetBlogItemsTransformedResponse;
  error: string;
}> = ({ blogItems, error }) => {
  if (error) {
    return <ErrorAlert error={error} />;
  }

  return (
    <Grid
      container
      columnSpacing={2}
      sx={{ justifyContent: { xs: 'center', lg: 'flex-start' } }}
    >
      {!blogItems.length && <span>No blog items found</span>}
      {blogItems.map(({ title, id, coverImage, summary, slug }) => {
        return (
          <Grid key={id} item xs="auto">
            <BlogCard
              title={title}
              coverImage={coverImage}
              summary={summary}
              slug={slug}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export async function getStaticProps({ preview = false }) {
  const { data, error } = await getBlogItems(preview);
  return {
    props: { preview, error, blogItems: data },
  };
}

export default BlogIndex;
