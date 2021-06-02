import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { MoreVertOutlined, FavoriteOutlined } from "@material-ui/icons";
import useStyles from "./styles";
import moment from "moment";
import { updatePost } from "../../../redux/actions";

export default function Post(props) {
  const { post } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleLike = useCallback(() => {
    dispatch(
      updatePost.updatePostRequest({
        ...post,
        likeCount: post.likeCount + 1,
      })
    );
  }, [dispatch, post]);

  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title={post.name}
        subheader={moment(post.updatedAt).format("HH:MM MMM DD, YYYY")}
        action={
          <IconButton>
            <MoreVertOutlined />
          </IconButton>
        }
      />
      <CardMedia
        image={post.attachment}
        title="title image"
        className={classes.media}
      />
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          {post.title}
        </Typography>
        <Typography variant="h5" component="p" color="textSecondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleLike}>
          <FavoriteOutlined />
          <Typography component="span" color="textSecondary">
            {post.likeCount}
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
