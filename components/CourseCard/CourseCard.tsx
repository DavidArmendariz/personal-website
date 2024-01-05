// import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type CourseCardProps = {
  title: string;
  coverImage: string;
  summary: string;
};

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  coverImage,
  summary,
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
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
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
      {/* <CardActions sx={{ mt: 'auto' }}>
        {repoUrl && (
          <Button onClick={() => window.open(repoUrl)} size="small">
            Go to repo
          </Button>
        )}
      </CardActions> */}
    </Card>
  );
};

export default CourseCard;
