import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles,Button } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  offset: {
    ...theme.mixins.toolbar, // min-height: 56px;
    marginBottom: "1rem", // margen opcional
  },
  title:{
    flexGrow:1
  }
}));

const Navbar = () => {
  const classes = useStyle();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography variant="h6" color="primary" className={classes.title}>Music App</Typography>
          <Button variant="text" color="primary">Login</Button>
          <Typography variant="h6" color="primary">/</Typography>
          <Button variant="text" color="primary">Sign Up</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </React.Fragment>
  );
};

export default Navbar;
