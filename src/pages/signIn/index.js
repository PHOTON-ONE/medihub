import React from 'react';
import { Sidebar } from "components/";
import {
    Grid,
    withStyles,
    AppBar,
    Toolbar,
    Typography,
  } from "@material-ui/core";

const drawerWidth = 240;
const styles = theme => ({
    root: {
      display: "flex",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  });

class SignIn extends React.Component {
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

                <div>SignIn!</div>
            </div>
        );
    };
}

export default SignIn;