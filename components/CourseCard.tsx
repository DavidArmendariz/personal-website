import AppText from '@/base-components/AppText';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ExternalLink from './ExternalLink';

const CourseCard = ({
  title,
  coverImage,
  summary,
  link,
}: {
  title: string;
  coverImage?: string;
  summary: string;
  link: string;
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth: 270,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="img"
        alt="portfolio item"
        height="140"
        image={coverImage}
      />
      <CardContent>
        <AppText bottomMargin variant="h5" component="div">
          {title}
        </AppText>
        <Typography
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
          }}
          variant="body2"
          color="text.secondary"
        >
          {summary}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: 'auto' }}>
        {link && <ExternalLink href={link}>Go to the course</ExternalLink>}
      </CardActions>
    </Card>
  );
};

export default CourseCard;
