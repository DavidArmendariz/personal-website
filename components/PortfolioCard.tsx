import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';
import AppText from '@/base-components/AppText';

const PortfolioCard = ({
  title,
  coverImage,
  summary,
  slug,
}: {
  title: string;
  coverImage?: string;
  summary: string;
  slug: string;
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
      <Link
        href={`/portfolio/${slug}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <CardActionArea>
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
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default PortfolioCard;
