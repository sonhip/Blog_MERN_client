import React, { useCallback } from "react";
import { Container, Fab } from "@material-ui/core";
import { useDispatch } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import Header from "../components/header";
import PostList from "../components/post_list";
import useStyles from "./styles";
import { showModal } from "../redux/actions";
import CreatePostModal from "../components/create_post_modal";

function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const openCreatePostModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Header />
      <PostList />
      <CreatePostModal />
      <Fab
        color="primary"
        onClick={openCreatePostModal}
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}

export default HomePage;
