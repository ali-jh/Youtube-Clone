import React, { Fragment } from "react";

import { Paper, Typography } from "@mui/material";

const VideoDetail = ({
  video: {
    id: { videoId },
    snippet: { title, chanelTitle, description },
  },
}) => {
  if (!videoId) return <div>Loading...</div>;

  const videosrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="video player"
          src={videosrc}
        />
      </Paper>

      <Paper elevation={6} style={{padding:"15px"}}>
        <Typography variant="h4">
            {title} - {chanelTitle}
        </Typography>
        <Typography variant="subtitle">
            {chanelTitle}
        </Typography>
        <Typography variant="subtitle">
            {description} 
        </Typography>
      </Paper>
    </Fragment>
  );
};

export default VideoDetail;