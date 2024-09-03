import React from "react";
import { IMiscCard } from "../../interfaces/misc-card.interface";
import { Box, Typography } from "@mui/material";
import UseMedia from "../../hooks/UseMedia";

const MiscCard: React.FC<IMiscCard> = ({ initial, body, extra, mg }) => {
  const { isMobile } = UseMedia();
  return (
    <Box marginRight={mg}>
      <Typography
        variant="h2"
        fontSize={18}
        color="#fff"
        marginBottom={isMobile ? 2 : 3}
        sx={{ textShadow: "none" }}
      >
        {initial}
      </Typography>

      <Typography
        variant="h2"
        fontSize={18}
        color="#fff"
        marginBottom={isMobile ? 2 : 3}
        sx={{ textShadow: "none" }}
      >
        {body}
      </Typography>

      {extra && (
        <Typography
          variant="h2"
          fontSize={18}
          color="#fff"
          marginBottom={isMobile ? 2 : 3}
          sx={{ textShadow: "none" }}
        >
          {extra}
        </Typography>
      )}
    </Box>
  );
};

export default MiscCard;
