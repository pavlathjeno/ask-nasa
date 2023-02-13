import { Typography } from '@mui/material';
import React from 'react'
import dataFetch from '../utility/dataFetch';

const apiKey = "DEMO_KEY";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

export default function Apod() {
    const data = dataFetch(apiUrl);
    return (
        <>
            <Typography>{data.title}</Typography>
        </>
  )
}
