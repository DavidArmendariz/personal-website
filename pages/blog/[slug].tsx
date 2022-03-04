import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ErrorAlert } from 'app-components';
import {
  GetBlogBySlugTransformedResponse,
  getBlogBySlug,
} from 'app-graphql/queries/blog';

const IMAGE_DIMENSIONS = {
  height: 400,
  width: 800,
};

const Blog: React.FC<{
  blog: GetBlogBySlugTransformedResponse | null;
  error?: any;
}> = ({ blog, error }) => {
  if (error) {
    return <ErrorAlert error={error} />;
  }

  if (!blog) {
    return <div>No blog found</div>;
  }

  const { width, height } = IMAGE_DIMENSIONS;

  return (
    <Grid container flexDirection="column" alignItems="center">
      <Grid item>
        <Image
          src={blog.coverImage}
          alt="Blog Cover Image"
          width={width}
          height={height}
        />
      </Grid>
      <Grid item sx={{ maxWidth: width }}>
        <Grid item>
          <Typography variant="h2">{blog.title}</Typography>
        </Grid>
        <Grid item sx={{ pt: 5 }}>
          <Typography variant="h5">{blog.summary}</Typography>
        </Grid>
        <hr />
        <div>{documentToReactComponents(blog.body)}</div>
      </Grid>
    </Grid>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { slug },
  } = context;

  if (typeof slug === 'string') {
    const { width, height } = IMAGE_DIMENSIONS;
    const { data, error } = await getBlogBySlug({ slug, height, width });
    return {
      props: {
        blog: data,
        error,
      },
    };
  }

  return {
    props: {
      blog: null,
    },
  };
};

export default Blog;
