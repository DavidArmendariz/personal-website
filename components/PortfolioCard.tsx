import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
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
            alt={title}
            image={coverImage}
            sx={{
              height: 180,
              objectFit: 'contain',
              bgcolor: 'background.paper',
            }}
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
                '& p': { m: 0 },
                '& ul': { m: 0, pl: 2 },
                '& li': { m: 0 },
              }}
              variant="body2"
              color="text.secondary"
              component="div"
            >
              <ReactMarkdown>{summary}</ReactMarkdown>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default PortfolioCard;
