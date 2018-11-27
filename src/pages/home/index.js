import React, { Component } from "react";
import {
  Grid,
  withStyles,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Overview } from "tools/";
import { Sidebar } from "components/";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              MediHub
            </Typography>
          </Toolbar>
        </AppBar>

        <Sidebar />
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Router basename="/">
            <Switch>
              <Route path="/" component={Overview} />
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
