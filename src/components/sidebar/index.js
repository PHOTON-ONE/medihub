import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { Mail as MailIcon, MoveToInbox as InboxIcon } from "@material-ui/icons";

import {Link} from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
});

const tools = [
    {
        name: "Overview",
        path: "/",
        icon: <MailIcon />,
        id: "overview"
    },
    {
        name: "Help",
        path: "/help",
        icon: <MailIcon />,
        id: "help"
    }
]

function Sidebar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left">
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {tools.map((element, index) => (
            <Link to={element.path} style={{ textDecoration: 'none' }}>
                <ListItem button key={element.id}>
                <ListItemIcon>
                    {element.icon}
                </ListItemIcon>
                <ListItemText primary={element.name} />
                </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
