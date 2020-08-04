import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import logo from '../static/logo.svg';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(() => ({
  logo: {
    maxWidth: 35,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Grid container justify="space-between">
          <Grid item>
            <Tooltip title="This is a logo!">
              <Avatar variant="rounded">
                <img className={classes.logo} src={logo} alt="logo" />
              </Avatar>
            </Tooltip>
          </Grid>
          <Grid item>
            <IconButton aria-label="menu">
              <MenuIcon color="primary" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
