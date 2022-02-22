import React from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Link,
  Typography,
} from '@mui/material';
import { classes } from '@utils/classes';

const ProjectCard = (props) => {
  const theClass = classes();
  return (
    <Card raised className={theClass.projectCard}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: props.color }} aria-label="recipe">
            {props.name[0]}
          </Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title={<Typography variant="h4">{props.name}</Typography>}
        subheader={<Typography variant="caption"></Typography>}
        style={{ fontFamily: 'Josefin Sans' }}
      />
      <CardMedia
        component="img"
        height="180"
        image={props.image}
        alt={props.name}
        style={{ padding: 20, width: 230, margin: 'auto' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link
          href={props.link}
          target="_blank"
          underline="none"
          className={theClass.navLink}
        >
          View Project
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
