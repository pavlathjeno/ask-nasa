import { Grid, Typography } from '@mui/material';
import React, { useState, useCallback, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import apiData from '../utility/apiData';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Modal from '@mui/material/Modal';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    paper: {
        width: 'auto',
        minWidth: 200,
        maxWidth: 1300,
        padding: theme.spacing(2),
        display: 'flex'
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

const Gallery = () => {
    const classes = useStyles();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const apiKey = "eybYmEBVfTW9FPK8bOAHGqyunu8ZMERAuHTeqjp4";
    //const apiKey = "DEMO_KEY";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10&thumbs=True`;
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().substring(0, 10));
    const [open, setOpen] = React.useState(false);
    const [modalData, setModalData] = useState({});

    const handleModalOpen = (data) => {
        setModalData(data);
        setOpen(true);
    };
    const handleModalClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setData(data);
          setLoading(false);

        };
        
        fetchData();
    }, []);
    if (loading) {
        return (
            <Box className={classes.root}>
                <CircularProgress />
            </Box>
        )
    }

  return (
    <Grid container md={12} className={classes.root}>
        <Paper className={classes.paper} elevation={24}>
            <Grid container md={12} spacing={2}>
            {Object(data).map((item) => (
                <Grid item md={3}>
                <Box style={{ height: 200, width: 300, backgroundImage: `url(${item.media_type == "video" ? item.thumbnail_url : item.url})`, backgroundSize: 'cover', backgroundPosition: 'center', margin: 10 }} onClick={() => handleModalOpen(item)}/>
                <Modal open={open} onClose={handleModalClose} data={modalData} backdrop='static'   
                    style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}>
                    <Paper elevation={24} style={{padding: 20}}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                        {modalData.title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {modalData.explanation}
                        </Typography>
                </Paper>
            </Modal>
                </Grid>
            ))}
            </Grid>
        </Paper>
    </Grid>
    
  )
}

export default Gallery;