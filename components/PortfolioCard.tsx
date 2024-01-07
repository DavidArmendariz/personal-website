import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AppText from '@/base-components/AppText';
import ExternalLink from './ExternalLink';

const PortfolioCard = ({
  title,
  coverImage,
  summary,
  repoUrl,
}: {
  title: string;
  coverImage?: string;
  summary: string;
  repoUrl: string;
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
        {repoUrl && <ExternalLink href={repoUrl}>Go to repo</ExternalLink>}
      </CardActions>
    </Card>
  );
};

export default PortfolioCard;
