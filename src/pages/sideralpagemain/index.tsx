import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CardMedia, CardActionArea } from '@material-ui/core';
import { Card } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import sideralpng from '../../../src/assets/sideral-logo.png';
import medicajpg from '../../../src/assets/doctor.jpg';

import {Title} from './styles';

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
      height: 100,   
    },
  }),
);

export default function SideralGroup() {
    const classes = useStyles();
  
    return (
      <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,300&display=swap');
      </style>
      <Title>Sideral Group</Title>
        <Box component='span' m={1} p={2}>
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
        </Box>
          <Card>
            <CardActionArea>
              <CardMedia
              component="img"
              src={medicajpg}
              />
            </CardActionArea>
          </Card>
       </>
    );
  }

// const SideralGroup: React.FC = () => <h1>Sideral Group</h1>

// export default SideralGroup;