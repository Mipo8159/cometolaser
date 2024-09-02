import React from "react";
import { Box, Typography } from "@mui/material";

export interface IBannerProps {
  backgroundImage: string;
  skipText?: boolean;
}
const Banner: React.FC<IBannerProps> = ({
  backgroundImage,
  skipText = false,
}) => {
  const bannerStyle: React.CSSProperties = {
    width: "100%",
    backgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    marginTop: "-2px",
    position: "relative",
  };

  return (
    <div style={bannerStyle}>
      <Box
        sx={{
          height: skipText ? "300px" : "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          margin: "75px 0px 50px 0",
          backgroundColor: "#fff",
        }}
      >
        {!skipText && (
          <Box
            sx={{
              maxWidth: "450px",
              width: "100%",
              padding: "50px 45px",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              fontSize={56}
              color="#000"
              sx={{ textShadow: "none" }}
            >
              WELCOME!
            </Typography>
            <Typography
              variant="body1"
              fontSize={18}
              color="#000"
              sx={{ textShadow: "none" }}
            >
              Discover effortless, year-round hair removal with our Alma's
              cutting-edge technology, last edition FIRST IN NEW YORK, designed
              for all skin and hair types, including tanned skin! Our advanced
              system combines three wavelengths with superior cooling and SHR
              technology to ensure safe, comfortable treatments. Choose from
              three versatile modes: SHR in motion for fast, large-area hair
              removal, SHR STACK for precise treatment on smaller areas like the
              face and bikini line, or HR classic for targeted pulses. Alma's
              SHR™ technology stands out as the only clinically-proven,
              virtually painless method, offering effective results with gradual
              heating and robust cooling for all skin types.
            </Typography>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Banner;
