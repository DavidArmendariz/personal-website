import Link from 'next/link';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const BlogCard = ({
  title,
  coverImage,
  summary,
  slug,
}: {
  slug: string;
  title: string;
  coverImage: string;
  summary: string;
}) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 270 }}>
      <Link href={`/blog/${slug}`} passHref>
        <CardActionArea>
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
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default BlogCard;
