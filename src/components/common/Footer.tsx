import { Box, Typography } from "@mui/material";
import React from "react";
import { IMiscCard } from "../../interfaces/misc-card.interface";
import MiscCard from "../cards/MiscCard";

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
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      sx={{ background: "#000" }}
      paddingX={16}
      paddingY={8}
    >
      <Typography
        variant="h2"
        fontSize={56}
        color="#fff"
        marginBottom={8}
        sx={{ textShadow: "none" }}
      >
        Where to Find Us
      </Typography>

      <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
        {footerContacts.map(({ id, initial, body, extra }: IMiscCard) => (
          <MiscCard key={id} initial={initial} body={body} extra={extra} />
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
