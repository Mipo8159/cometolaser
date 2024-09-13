import React from "react";
import VideoPlayer from "../components/common/VideoPlayer";
import Banner from "../components/common/Banner";
import Reviews from "../components/common/Reviews";
import Footer from "../components/common/Footer";
import { Box } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <Box>
      <VideoPlayer
        src="/video/main.MP4"
        autoPlay={true}
        extra="FIRST IN NEW YORK"
      />
      <Banner backgroundImage="url(/image/banner.png)" />
      <Reviews />
      <Footer />
    </Box>
  );
};

export default HomePage;
