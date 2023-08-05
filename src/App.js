import "./App.css";
import youtube from "./Api/youtube";
import { Grid } from "@mui/material";
import SearchBox from "./components/SearchBox";
import { useState } from "react";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setselectedVideo] = useState({ id: {}, snippet: {} });

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBox onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo}/>
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onSelectVideo={setselectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchItem) {
    const {
      data: { items: videos },
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResult: 5,
        key: "AIzaSyDr1SW9u9jIE59QK0dNOoNZUWnBnqOmInM",
        q: searchItem,
      },
    });
    setVideos(videos);
    setselectedVideo(videos[0]);
  }
}

export default App;
