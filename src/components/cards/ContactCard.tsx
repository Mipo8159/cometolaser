import { Box, Typography } from "@mui/material";
import React from "react";
import { IContactCard } from "../../interfaces/contact-card.interface";

const ContactCard: React.FC<IContactCard> = ({ title, body }) => {
  return (
    <Box marginBottom={3}>
      <Typography
        variant="h2"
        fontSize={25}
        color="#000"
        marginBottom={2}
        sx={{ textShadow: "none" }}
      >
        {title}
      </Typography>

      <Typography
        variant="h2"
        fontSize={18}
        color="#000"
        marginBottom={3}
        sx={{ textShadow: "none" }}
      >
        {body}
      </Typography>
    </Box>
  );
};

export default ContactCard;
