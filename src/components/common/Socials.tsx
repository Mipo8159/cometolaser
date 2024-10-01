import { Box, Button } from "@mui/material";
import React from "react";

const socials = [
  {
    id: 1,
    social: "/image/instagram.png",
    link: "https://www.instagram.com/cometolaser/",
  },
  {
    id: 2,
    social: "/image/facebook.png",
    link: "https://www.facebook.com/cometolaser34/",
  },
  { id: 3, social: "/image/twitter.png" },
  { id: 4, social: "/image/linkedin.png" },
  { id: 5, social: "/image/youtube.png" },
  { id: 6, social: "/image/spottify.webp" },
];

const Socials: React.FC = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} paddingBottom={5}>
      {socials.map(({ id, social, link }) => (
        <Button
          key={id}
          href={link ? link : ""}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={social} alt={social} />
        </Button>
      ))}
    </Box>
  );
};

export default Socials;
