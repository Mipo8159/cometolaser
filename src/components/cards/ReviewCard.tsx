import React from "react";
import { IReview } from "../../interfaces/review.interface";
import { Box, Typography, Card, CardContent } from "@mui/material";
import UseMedia from "../../hooks/UseMedia";

const ReviewCard: React.FC<IReview> = ({ author, body, icon }) => {
  const { isMobile } = UseMedia();
  return (
    <Card
      sx={{
        maxWidth: isMobile ? 300 : 245,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: isMobile ? "8" : "16px",
        boxShadow: "none",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mb: 2,
          }}
        >
          {icon && <Box sx={{ fontSize: 60 }}>{icon}</Box>}
        </Box>
        <Typography
          variant="body2"
          fontSize={14}
          color="#9D6200"
          gutterBottom
          sx={{ textShadow: "none", textAlign: "center" }}
        >
          {body}
        </Typography>
        <Typography
          variant="body1"
          fontSize={15}
          color="#9D6200"
          sx={{ textShadow: "none", fontWeight: "bold", mt: 2 }}
        >
          {author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
