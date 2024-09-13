import { Box } from "@mui/material";
import React from "react";
import VideoPlayer from "../components/common/VideoPlayer";
import Banner from "../components/common/Banner";
import Faq from "../components/common/Faq";
import Socials from "../components/common/Socials";
import UseMedia from "../hooks/UseMedia";

const AboutPage: React.FC = () => {
  const { isMobile } = UseMedia();
  return (
    <Box>
      <VideoPlayer src="/video/about.mp4" autoPlay={true} />
      {!isMobile && (
        <Banner
          backgroundImage="url(/image/sliding_banner.webp)"
          skipText={true}
        />
      )}
      <Faq />
      <Socials />
    </Box>
  );
};

export default AboutPage;
