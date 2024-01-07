import { Metadata } from 'next';
import Grid from '@mui/material/Grid';
import CourseCard from '@/components/CourseCard';
import { TypeCourseSkeleton } from '@/content/types';
import client from '@/content/client';

export const metadata: Metadata = {
  title: 'David Armendáriz - Courses',
};

const Page = async () => {
  const courseEntries =
    await client.withoutUnresolvableLinks.getEntries<TypeCourseSkeleton>({
      content_type: 'course',
    });

  const courseItems = courseEntries.items;

  return (
    <Grid
      container
      columnSpacing={2}
      sx={{ justifyContent: { xs: 'center', lg: 'flex-start' } }}
      alignItems="stretch"
    >
      {courseItems.length ? (
        courseItems.map((courseItem) => {
          const { title, coverImage, summary, slug } = courseItem.fields;
          const coverImageUrl = coverImage?.fields.file?.url;
          return (
            <Grid key={slug} item xs="auto" sx={{ display: 'flex' }}>
              <CourseCard
                title={title}
                coverImage={coverImageUrl}
                summary={summary}
              />
            </Grid>
          );
        })
      ) : (
        <span>No courses found</span>
      )}
    </Grid>
  );
};

export default Page;
