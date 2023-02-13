import { Typography } from '@mui/material';
import React from 'react'
import dataFetch from '../utility/dataFetch';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { fontSize } from '@mui/system';

const apiKey = "eybYmEBVfTW9FPK8bOAHGqyunu8ZMERAuHTeqjp4";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-start',
      padding: 30,
      justifyContent: 'center',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 1200,
    },
    box: {
        height: 580,
        width: 580,
    }
  }));

export default function Apod() {
    const classes = useStyles();
    const data = dataFetch(apiUrl);
    return (
        <>
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={24}>
                    <Box>
                        <Typography style={{fontSize: 30}}>{data.title}</Typography>
                        <Typography>{data.explanation}</Typography>
                    </Box>
                    <Box>
                        <Box className={classes.box} component="img" src={data.url}>
                        </Box>
                    </Box>
                </Paper>
            </div>
        </>
  )
}
