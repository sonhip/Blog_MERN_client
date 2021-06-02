import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Post from "./post";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { postsState$ } from "../../redux/selectors";

export default function PostList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);

  const posts = useSelector(postsState$);

  return (
    <Grid container spacing={2} alignItems="stretch">
      <>
        {posts.length > 0 ? (
          <>
            {posts.map((item) => (
              <Grid item xs={12} sm={6}>
                <Post key={item._id} post={item} />
              </Grid>
            ))}
          </>
        ) : (
          <h2>loading</h2>
        )}
      </>
    </Grid>
  );
}
