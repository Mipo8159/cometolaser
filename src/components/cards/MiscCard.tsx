import React from "react";
import { IMiscCard } from "../../interfaces/misc-card.interface";
import { Box, Typography } from "@mui/material";

const MiscCard: React.FC<IMiscCard> = ({ initial, body, extra }) => {
  return (
    <Box>
      <Typography
        variant="h2"
        fontSize={18}
        color="#fff"
        marginBottom={3}
        sx={{ textShadow: "none" }}
      >
        {initial}
      </Typography>

      <Typography
        variant="h2"
        fontSize={18}
        color="#fff"
        marginBottom={3}
        sx={{ textShadow: "none" }}
      >
        {body}
      </Typography>

      {extra && (
        <Typography
          variant="h2"
          fontSize={18}
          color="#fff"
          marginBottom={3}
          sx={{ textShadow: "none" }}
        >
          {extra}
        </Typography>
      )}
    </Box>
  );
};

export default MiscCard;
