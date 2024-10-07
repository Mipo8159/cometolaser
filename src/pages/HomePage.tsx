import React from "react";
import VideoPlayer from "../components/common/VideoPlayer";
import Banner from "../components/common/Banner";
import Reviews from "../components/common/Reviews";
import Footer from "../components/common/Footer";
import { Box } from "@mui/material";
import useTrackPageView from "../hooks/useTrackPage";

const HomePage: React.FC = () => {
  useTrackPageView();

  return (
    <Box>
      <VideoPlayer
        src="/video/main.MP4"
        autoPlay={true}
        extra="FIRST IN NEW YORK"
      />
      <Banner />
      <VideoPlayer
        src="/video/intro.mp4"
        autoPlay={true}
        videoOnly
        styles={{ height: "800px" }}
      />
      <Reviews />
      <Footer />
    </Box>
  );
};

export default HomePage;
