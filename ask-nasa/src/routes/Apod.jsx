import { Grid, Typography } from '@mui/material';
import React, { useState, useCallback, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ApodComponent from '../components/ApodComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
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
        height: 500,
    },
    datePicker: {
        marginTop: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));


const Apod = () => {
    const classes = useStyles();
    const [data, setData] = useState({});
    const apiKey = "eybYmEBVfTW9FPK8bOAHGqyunu8ZMERAuHTeqjp4";
    //const apiKey = "DEMO_KEY";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().substring(0, 10));
    
    const handleDateChange = (event) => {
      const date = event.target.value;
      setSelectedDate(date);
    };

    const apiDateUrl = useCallback(() => {
        return apiUrl + `&date=${selectedDate}`;
    }, [apiUrl, selectedDate]);
    
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(apiDateUrl());
          const data = await response.json();
          setData(data);
        };
    
        fetchData();
      }, []);

    const handleButtonClick = async () => {
        const response = await fetch(apiDateUrl());
        const data = await response.json();
        setData(data);
    };
    
    return (
        <>
            <div className={classes.root}>
                <Grid container>
                    <Grid item md={6} className={classes.paper}>
                        <Box className={classes.paper}>
                        <TextField
                            id="date"
                            label="Date"
                            type="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            className={classes.datePicker}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Button variant="contained" color="primary" onClick={handleButtonClick} className={classes.button}>
                            Update Image
                        </Button>
                        </Box>
                    </Grid>
                    <Grid item md={12} className={classes.paper}>
                        <Paper elevation={24}>
                            <Grid container padding={2}>
                                <Grid item md={12}>
                                    <Box>
                                        <Typography style={{fontSize: 30}}>{data.title}</Typography>
                                        <Typography>{data.explanation}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={12} className={classes.paper}>
                                    <Paper>
                                        <Box className={classes.box}>
                                            {ApodComponent(data)}
                                        </Box>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
  )
}

export default Apod;