import { NextPage } from 'next';
import Grid from '@mui/material/Grid';
import { CourseCard, ErrorAlert, PageHead } from 'app-components';
import {
  GetCourseItemsTransformedResponse,
  getCourseItems,
} from 'app-graphql/queries/course';

const CourseIndex: NextPage<{
  courseItems: GetCourseItemsTransformedResponse;
  error: any;
}> = ({ courseItems, error }) => {
  if (error) {
    return <ErrorAlert error={error} />;
  }

  return (
    <>
      <PageHead title={'David Armendáriz | Courses'} />
      <Grid
        container
        columnSpacing={2}
        sx={{ justifyContent: { xs: 'center', lg: 'flex-start' } }}
        alignItems="stretch"
      >
        {!courseItems.length && <span>No courses found</span>}
        {courseItems.map(({ title, id, coverImage, summary }) => (
          <Grid key={id} item xs="auto" sx={{ display: 'flex' }}>
            <CourseCard
              title={title}
              coverImage={coverImage}
              summary={summary}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const { data, error } = await getCourseItems({ preview });
  return {
    props: { preview, error, courseItems: data },
  };
}

export default CourseIndex;
