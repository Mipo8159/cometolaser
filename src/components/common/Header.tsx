import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowBackIosNew";
import "../../styles/vagaro.css";
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
        width={isMobile ? "150px" : "auto"}
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
          fontSize={isMobile ? 25 : 42}
          fontFamily={"montserrat"}
          fontWeight={600}
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
          className="btn-hover"
          sx={{
            color: "black",
            background: "white",
            border: "1px solid lightgray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? "5px 8px" : "8px 20px",
            fontFamily: "montserrat",
            fontWeight: "600",
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
          About Us
        </Button>
        <Button
          className="btn-hover"
          sx={{
            color: "black",
            background: "white",
            border: "1px solid lightgray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? "5px 8px" : "8px 20px",
            fontFamily: "montserrat",
            fontWeight: "600",
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

        <a
          href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVBh1+AlsgZbN43U0IWetNqJ2tsFz33AN0AtcX/kaTbKxySdGKTrNIp+tEw+2riuHn9sUKnegykTdg2uWGlD56lYcdT+fezA9y6wRHn6e2Y+ybzJDt7JGI1L5wb+qBN3gR6VDem0UkWUUrHltt8sljDMv+qckAXfnN3rAOjknL20SyU2BoYoC34XG0MDA6uvmnE3oP+Wfxnp58Pp7FDSVmCCdBZsyFC753jlgHYrVoZp78mz2I0IqUiSx7P0QHrpFZ9w6cf6KxLVCIle9JxxgUc1+hFFGhZWLyKOgv0Z9InaLIy8JUq+PMUwmBCrdbgxwJ9t8fSVdyKCD6dVP285mRRtHeq+WtHEb6tdDF3O/ySgFLDL0E/IsEAs6tFJd58RtRgfb1YNGl5nNznxe1XU1/rcPrCu/n56etB75aofTzHdRh/GtyDZk9NYaKSGMkadMPg=="
          target="_blank"
          rel="noopener noreferrer"
          className="vagaro btn-hover vagaro-header"
          style={{
            padding: isMobile ? "5px 8px" : "8px 20px",
          }}
        >
          Book Now
          {!isMobile && (
            <ArrowForwardIcon
              style={{ transform: "rotate(180deg)", marginLeft: "8px" }}
            />
          )}
        </a>
      </Box>
    </Box>
  );
};

export default Header;
