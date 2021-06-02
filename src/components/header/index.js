import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";

function Header() {
  const classes = useStyles();
  return (
    <Typography variant="h4" align="center" className={classes.container}>
      Blogs
    </Typography>
  );
}

export default Header;
