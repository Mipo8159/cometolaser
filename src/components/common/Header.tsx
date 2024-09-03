import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowBackIosNew";
import React from "react";
import { useNavigate } from "react-router-dom";
import UseMedia from "../../hooks/UseMedia";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { isMobile } = UseMedia();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: "10px",
        width: isMobile ? "90%" : "95%",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <Box
        onClick={(e) => {
          e.stopPropagation();
          navigate("/");
        }}
        sx={{ cursor: "pointer" }}
      >
        <Typography
          variant="h1"
          component="h1"
          color={"white"}
          fontSize={isMobile ? 22 : 42}
        >
          COME TO LASER
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Button
          sx={{
            color: "black",
            background: "white",
            border: "1px solid lightgray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? "5px 8px" : "8px 20px",
            "&:hover": {
              border: "1px solid black",
            },
          }}
          endIcon={
            !isMobile && (
              <ArrowForwardIcon sx={{ transform: "rotate(180deg)" }} />
            )
          }
          onClick={(e) => {
            e.stopPropagation();
            navigate("/about");
          }}
        >
          About
        </Button>
        <Button
          sx={{
            color: "black",
            background: "white",
            border: "1px solid lightgray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? "5px 8px" : "8px 20px",
            "&:hover": {
              border: "1px solid black",
            },
          }}
          endIcon={
            !isMobile && (
              <ArrowForwardIcon sx={{ transform: "rotate(180deg)" }} />
            )
          }
          onClick={(e) => {
            e.stopPropagation();
            navigate("/contact");
          }}
        >
          Contact
        </Button>
        {/* <Button
          sx={{
            color: "black",
            background: "white",
            border: "1px solid lightgray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 20px",
            "&:hover": {
              border: "1px solid black",
            },
          }}
          endIcon={<ArrowForwardIcon sx={{ transform: "rotate(180deg)" }} />}
          onClick={() => navigate("/buy-now")}
        >
          Book Now
        </Button> */}
      </Box>
    </Box>
  );
};

export default Header;
