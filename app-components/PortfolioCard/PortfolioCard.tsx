import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type PortfolioCardProps = {
  title: string;
  coverImage: string;
  summary: string;
  repoUrl: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  coverImage,
  summary,
  repoUrl,
}) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 270 }}>
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
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
      <CardActions>
        {repoUrl && (
          <Button onClick={() => window.open(repoUrl)} size="small">
            Go to repo
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default PortfolioCard;
