import { Metadata, NextPage } from 'next';
import Grid from '@mui/material/Grid';
import CourseCard from '@/components/CourseCard';
import ErrorAlert from '@/components/ErrorAlert';
import {
  GetCourseItemsTransformedResponse,
  getCourseItems,
} from '@/graphql/queries/course';

export const metadata: Metadata = {
  title: 'David Armendáriz - Courses',
};

const CourseIndex: NextPage<{
  courseItems: GetCourseItemsTransformedResponse;
  error: string;
}> = ({ courseItems, error }) => {
  if (error) {
    return <ErrorAlert error={error} />;
  }

  return (
    <Grid
      container
      columnSpacing={2}
      sx={{ justifyContent: { xs: 'center', lg: 'flex-start' } }}
      alignItems="stretch"
    >
      {!courseItems.length && <span>No courses found</span>}
      {courseItems.map(({ title, id, coverImage, summary }) => (
        <Grid key={id} item xs="auto" sx={{ display: 'flex' }}>
          <CourseCard title={title} coverImage={coverImage} summary={summary} />
        </Grid>
      ))}
    </Grid>
  );
};

export async function getStaticProps({ preview = false }) {
  const { data, error } = await getCourseItems({ preview });
  return {
    props: { preview, error, courseItems: data },
  };
}

export default CourseIndex;
