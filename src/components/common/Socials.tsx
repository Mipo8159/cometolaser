import { Box } from "@mui/material";
import React from "react";

const socials = [
  { id: 1, social: "/image/instagram.png" },
  { id: 2, social: "/image/facebook.png" },
  { id: 3, social: "/image/twitter.png" },
  { id: 4, social: "/image/linkedin.png" },
  { id: 5, social: "/image/youtube.png" },
  { id: 6, social: "/image/spottify.webp" },
];

const Socials: React.FC = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} paddingBottom={5}>
      {socials.map(({ id, social }) => (
        <Box key={id}>
          <img src={social} alt={social} />
        </Box>
      ))}
    </Box>
  );
};

export default Socials;
