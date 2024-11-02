import { Box } from "@mui/material";
import React from "react";
import VideoPlayer from "../components/common/VideoPlayer";
import Contact from "../components/common/Contact";
import Footer from "../components/common/Footer";
import useTrackPageView from "../hooks/useTrackPage";
import Header from "../components/common/Header";

const ContactPage: React.FC = () => {
  useTrackPageView();

  return (
    <Box>
      <div className="header-container">
        <Header />
      </div>

      <VideoPlayer src="/video/contact.mp4" autoPlay={true} videoOnly />
      <Contact />
      <Footer />
    </Box>
  );
};

export default ContactPage;
