import { Box, Typography } from "@mui/material";
import React from "react";
import { IMiscCard } from "../../interfaces/misc-card.interface";
import MiscCard from "../cards/MiscCard";
import UseMedia from "../../hooks/UseMedia";

const footerContacts: IMiscCard[] = [
  {
    id: 1,
    initial: {
      head: "1 (929) 603 - 7388",
      mobile: true,
    },
    body: {
      head: "ComeToLaser@gmail.com",
      email: true,
    },
  },
  {
    id: 2,
    initial: {
      head: "34 E 67th Street",
      mobile: false,
    },
    body: {
      head: "New York, New York, 10065",
      email: false,
    },
  },
  {
    id: 3,
    initial: {
      head: "Mon - Fri: 9am - 6pm",
      mobile: false,
    },
    body: {
      head: "​​Saturday: 9am - 6pm",
      email: false,
    },
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
      paddingY={isMobile ? 4 : 8}
    >
      <Typography
        variant="h2"
        fontSize={isMobile ? 28 : 56}
        color="#fff"
        marginBottom={isMobile ? 4 : 8}
        sx={{ textShadow: "none" }}
        fontFamily={"montserrat"}
        fontWeight={500}
      >
        Where to Find Us
      </Typography>

      <Box
        display={isMobile ? "block" : "flex"}
        flexDirection={!isMobile ? "row" : "column"}
        alignItems={isMobile || isTablet ? "center" : "flex-start"}
        justifyContent={"space-between"}
        width={isMobile ? "auto" : "100%"}
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
