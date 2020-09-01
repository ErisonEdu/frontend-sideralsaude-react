import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import sideralpng from '../../../src/assets/sideral-logo.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: 'black',
    },
    title: {
      flexGrow: 1,
      color: 'black',
      //maxWidth: 140,
    },
    login: {
        fontWeight: 'bold',
        color: 'black',
    },
    logo: {
      height: 100,    }
  }),
);

export default function SideralGroup() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div>
                <a href="http://localhost:3000"><img src={sideralpng} alt="logo-sideral" className={classes.logo}></img></a>
            </div>
            <Typography variant="h6" className={classes.title}>
              Grupo Sideral
            </Typography>
            <Button color="inherit" href="http://localhost:3000/SignInSide" className={classes.login}>Entre</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

// const SideralGroup: React.FC = () => <h1>Sideral Group</h1>

// export default SideralGroup;