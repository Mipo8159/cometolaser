import { Box } from "@mui/material";
import React from "react";
import VideoPlayer from "../components/common/VideoPlayer";
import Faq from "../components/common/Faq";
import Socials from "../components/common/Socials";
import useTrackPageView from "../hooks/useTrackPage";

const AboutPage: React.FC = () => {
  useTrackPageView();

  return (
    <Box>
      <VideoPlayer src="/video/about.mp4" autoPlay={true} />
      <Faq />
      <div
        className="certified"
        style={{
          backgroundImage: "url(/image/certified.jpeg)",
        }}
      />
      <Socials />
    </Box>
  );
};

export default AboutPage;
