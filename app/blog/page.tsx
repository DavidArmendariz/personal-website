import { Metadata } from 'next';
import Grid from '@mui/material/Grid';
import BlogCard from '@/components/BlogCard';
import client from '@/content/client';

export const metadata: Metadata = {
  title: 'David Armendáriz - Blog',
};

const Page = async () => {
  const blogEntries = await client.getEntries({
    content_type: 'blog',
  });

  const blogItems: any = blogEntries.items;

  return (
    <Grid
      container
      columnSpacing={2}
      sx={{ justifyContent: { xs: 'center', lg: 'flex-start' } }}
    >
      {!blogItems.length && <span>No blog items found</span>}
      {blogItems.map((blogItem: any) => {
        const { title, coverImage, summary, slug } = blogItem.fields;
        const coverImageUrl = coverImage.fields.file.url;
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
      })}
    </Grid>
  );
};

export default Page;
