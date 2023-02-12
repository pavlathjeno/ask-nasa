import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


export default function Root() {
    const navigate = useNavigate()
    
    const handleClick = (page) => {
        navigate(`/${page}`);
      };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Button variant="h6" color="inherit" component="div" onClick={() => handleClick('Apod')}>
                Apod
            </Button>
          <Button variant="h6" color="inherit" component="div" onClick={() => handleClick('Gallery')}>
                Gallery
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet/>
    </Box>

  );
}