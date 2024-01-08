import { Metadata } from 'next';
import Grid from '@mui/material/Grid';
import BlogCard from '@/components/BlogCard';
import client from '@/content/client';
import { TypeBlogSkeleton } from '@/content/types';

export const metadata: Metadata = {
  title: 'David Armendáriz - Blog',
};

const Page = async () => {
  const blogEntries =
    await client.withoutUnresolvableLinks.getEntries<TypeBlogSkeleton>({
      content_type: 'blog',
    });

  const blogItems = blogEntries.items;

  return (
    <Grid
      container
      columnSpacing={2}
      sx={{ justifyContent: { xs: 'center', lg: 'flex-start' } }}
    >
      {blogItems.length ? (
        blogItems.map((blogItem) => {
          const { title, coverImage, summary, slug } = blogItem.fields;
          console.log(coverImage);
          const coverImageUrl = coverImage?.fields.file?.url;
          return (
            <Grid key={slug} item xs="auto">
              <BlogCard
                title={title}
                coverImage={coverImageUrl}
                summary={summary}
                slug={slug}
              />
            </Grid>
          );
        })
      ) : (
        <span>No blog items found</span>
      )}
    </Grid>
  );
};

export default Page;
