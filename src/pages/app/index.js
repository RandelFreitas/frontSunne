import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import RoutesApp from './routesApp';
import { Avatar, Box, Card, CardContent } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';

import { logout } from '../../service/auth';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  name: {
    textAlign: 'center',
    padding: 20
  },
  img: {
    margin: 'auto',
    alignSelf: 'center'
  },
  text: {
    paddingTop: 10
  }
}));

function App(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <div className={classes.name}>
        <Avatar className={classes.img} src={"https://material-kit-react.devias.io/static/images/avatars/avatar_6.png"}/>
        <Typography className={classes.text} color="textPrimary" variant="subtitle1">
          Bem vinda, Maria
        </Typography>
      </div>
      <Divider />
      <List>
        <ListItem button component={Link} to={`/app`}>
          <ListItemIcon><EqualizerIcon/></ListItemIcon>
          <ListItemText primary={"Dashboard"} />
        </ListItem>
        <ListItem button component={Link} to={`/app/form`}>
          <ListItemIcon><FormatAlignCenterIcon/></ListItemIcon>
          <ListItemText primary={"Formul??rio"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon><ExitToAppIcon/></ListItemIcon>
          <ListItemText primary={"Sair"} onClick={() => logout()}/>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" 
            aria-label="open drawer" 
            edge="start" 
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Sunne
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{paper: classes.drawerPaper}}
            ModalProps={{keepMounted: true}}>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{paper: classes.drawerPaper}}
            variant="permanent"
            open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <RoutesApp />
      </main>
    </div>
  );
}

export default App;