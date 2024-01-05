import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import ErrorAlert from '@/components/ErrorAlert';
import {
  GetBlogBySlugTransformedResponse,
  getBlogBySlug,
} from '@/graphql/queries/blog';
import Text from '@/base-components/Text';

const IMAGE_DIMENSIONS = {
  height: 400,
  width: 800,
};

const Blog: React.FC<{
  blog: GetBlogBySlugTransformedResponse | null;
  error?: string;
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
          <Text variant="h2">{blog.title}</Text>
        </Grid>
        <Grid item sx={{ pt: 5 }}>
          <Text variant="h5">{blog.summary}</Text>
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
