import React from "react";
import { IFaq } from "../../interfaces/faq.interface";
import { Box, Typography } from "@mui/material";

const FaqCard: React.FC<IFaq> = ({ idx, question, answer }) => {
  return (
    <Box
      width={"500px"}
      marginBottom={5}
      sx={{ marginRight: idx! % 2 === 0 ? "-300px" : "300px" }}
    >
      <Typography
        variant="h2"
        fontSize={100}
        color="#000"
        marginBottom={3}
        sx={{ textShadow: "none" }}
      >
        {`0${idx}`}
      </Typography>

      <Typography
        variant="h2"
        fontSize={18}
        color="#000"
        marginBottom={3}
        sx={{ textShadow: "none" }}
      >
        {question}
      </Typography>

      <Typography
        variant="h2"
        fontSize={16}
        color="#000"
        marginBottom={3}
        sx={{ textShadow: "none" }}
      >
        {answer}
      </Typography>
    </Box>
  );
};

export default FaqCard;
