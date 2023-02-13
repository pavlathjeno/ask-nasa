import React from 'react'
import Box from '@material-ui/core/Box';

export default function ApodComponent(data) {
    let content = "";
    if (data.media_type === "video") {
        content =
                <iframe className="apod-video" height="500" width="700" src={data.url}></iframe>
    } else {
        content = 
                <Box component="img" style={{ height: 500, width: 'auto' }} src={data.url}/>
    }
  return (
    <>
    {content}
    </>
  )
}
