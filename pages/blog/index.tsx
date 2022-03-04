import { NextPage } from 'next';
import Grid from '@mui/material/Grid';
import { BlogCard, ErrorAlert, PageHead } from 'app-components';
import {
  GetBlogItemsTransformedResponse,
  getBlogItems,
} from 'app-graphql/queries/blog';

const BlogIndex: NextPage<{
  blogItems: GetBlogItemsTransformedResponse;
  error: any;
}> = ({ blogItems, error }) => {
  if (error) {
    return <ErrorAlert error={error} />;
  }

  return (
    <>
      <PageHead title={'David Armendáriz | Blog'} />
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
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const { data, error } = await getBlogItems(preview);
  return {
    props: { preview, error, blogItems: data },
  };
}

export default BlogIndex;
