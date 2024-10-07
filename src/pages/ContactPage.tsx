import { Box } from "@mui/material";
import React from "react";
import VideoPlayer from "../components/common/VideoPlayer";
import Contact from "../components/common/Contact";
import Footer from "../components/common/Footer";
import useTrackPageView from "../hooks/useTrackPage";

const ContactPage: React.FC = () => {
  useTrackPageView();

  return (
    <Box>
      <VideoPlayer src="/video/contact.mp4" autoPlay={true} />
      <Contact />
      <Footer />
    </Box>
  );
};

export default ContactPage;
