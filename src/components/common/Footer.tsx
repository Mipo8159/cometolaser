import { Box, Typography } from "@mui/material";
import React from "react";
import { IMiscCard } from "../../interfaces/misc-card.interface";
import MiscCard from "../cards/MiscCard";
import UseMedia from "../../hooks/UseMedia";

const footerContacts: IMiscCard[] = [
  {
    id: 1,
    initial: "1 (929) 603 - 7388",
    body: "ComeToLaser@gmail.com",
  },
  {
    id: 2,
    initial: "34 E 67th Street",
    body: "New York, New York, 10065",
  },
  {
    id: 3,
    initial: "Mon - Fri: 9am - 6pm",
    body: "​​Saturday: 9am - 6pm",
    extra: "​Sunday: Closed",
  },
];

const Footer: React.FC = () => {
  const { isMobile, isTablet } = UseMedia();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={isMobile || isTablet ? "center" : "flex-start"}
      sx={{ background: "#000" }}
      paddingX={isMobile ? 0 : 8}
      paddingY={isMobile ? 5 : 8}
    >
      <Typography
        variant="h2"
        fontSize={isMobile ? 34 : 56}
        color="#fff"
        marginBottom={isMobile ? 5 : 8}
        sx={{ textShadow: "none" }}
      >
        Where to Find Us
      </Typography>

      <Box
        display={"flex"}
        flexDirection={!isMobile ? "row" : "column"}
        alignItems={isMobile || isTablet ? "center" : "flex-start"}
        justifyContent={"space-between"}
        width={"100%"}
      >
        {footerContacts.map(({ id, initial, body, extra }: IMiscCard, idx) => (
          <MiscCard
            key={id}
            initial={initial}
            body={body}
            extra={extra}
            mg={isMobile ? (idx % 2 === 0 ? 10 : -14) : 0}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
