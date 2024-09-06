import { Box, Typography } from "@mui/material";
import React from "react";
import { IContactCard } from "../../interfaces/contact-card.interface";
import UseMedia from "../../hooks/UseMedia";

const ContactCard: React.FC<IContactCard> = ({ title, body }) => {
  const { isMobile } = UseMedia();
  return (
    <Box marginBottom={3}>
      <Typography
        variant="h2"
        fontSize={25}
        color="#000"
        marginBottom={2}
        fontFamily={"montserrat"}
        fontWeight={500}
        sx={{ textShadow: "none" }}
      >
        {title}
      </Typography>

      {body.mobile ? (
        <a
          href={`tel:${body.head}`}
          style={{
            color: "#000",
            fontSize: "18px",
            marginBottom: isMobile ? "15px" : "22px",
            display: "block",
            fontFamily: "montserrat",
            fontWeight: "500",
          }}
        >
          {body.head}
        </a>
      ) : body.email ? (
        <a
          href={`mailto:${body.head}`}
          style={{
            color: "#000",
            fontSize: "18px",
            marginBottom: isMobile ? "15px" : "22px",
            display: "block",
            fontFamily: "montserrat",
            fontWeight: "500",
          }}
        >
          {body.head}
        </a>
      ) : (
        <Typography
          variant="h2"
          fontSize={18}
          color="#000"
          marginBottom={3}
          fontFamily={"montserrat"}
          fontWeight={500}
          sx={{ textShadow: "none" }}
        >
          {body.head}
        </Typography>
      )}
    </Box>
  );
};

export default ContactCard;
