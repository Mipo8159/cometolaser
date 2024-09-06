import React from "react";
import { IFaq } from "../../interfaces/faq.interface";
import { Box, Typography } from "@mui/material";
import UseMedia from "../../hooks/UseMedia";

const FaqCard: React.FC<IFaq> = ({ idx, question, answer }) => {
  const { isMobile } = UseMedia();
  return (
    <Box
      width={isMobile ? "275px" : "500px"}
      marginBottom={isMobile ? 3 : 5}
      sx={{
        marginRight: isMobile
          ? idx! % 2 === 0
            ? "-80px"
            : "80px"
          : idx! % 2 === 0
          ? "-300px"
          : "300px",
      }}
    >
      <Typography
        variant="h2"
        fontSize={isMobile ? 50 : 100}
        color="#000"
        marginBottom={isMobile ? 2 : 3}
        sx={{ textShadow: "none" }}
        fontFamily={"montserrat"}
        fontWeight={500}
      >
        {`0${idx}`}
      </Typography>

      <Typography
        variant="h2"
        fontSize={18}
        color="#000"
        marginBottom={isMobile ? 2 : 3}
        sx={{ textShadow: "none" }}
        fontFamily={"montserrat"}
        fontWeight={500}
      >
        {question}
      </Typography>

      <Typography
        variant="h2"
        fontSize={16}
        color="#000"
        marginBottom={isMobile ? 2 : 3}
        sx={{ textShadow: "none" }}
        fontFamily={"montserrat"}
        fontWeight={500}
      >
        {answer}
      </Typography>
    </Box>
  );
};

export default FaqCard;
