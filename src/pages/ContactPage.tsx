import { Box } from "@mui/material";
import React from "react";
import VideoPlayer from "../components/common/VideoPlayer";
import Contact from "../components/common/Contact";
import Footer from "../components/common/Footer";

const ContactPage: React.FC = () => {
  return (
    <Box>
      <VideoPlayer src="/video/contact.mp4" autoPlay={true} />
      <Contact />
      <Footer />
    </Box>
  );
};

export default ContactPage;
