import React from "react";
import { Box, Typography } from "@mui/material";
import UseMedia from "../../hooks/UseMedia";

export interface IBannerProps {
  backgroundImage: string;
  skipText?: boolean;
}
const Banner: React.FC<IBannerProps> = ({
  backgroundImage,
  skipText = false,
}) => {
  const { isMobile } = UseMedia();
  const bannerStyle: React.CSSProperties = {
    width: "100%",
    height: isMobile && skipText ? "200px" : "auto",
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
          margin: isMobile ? "40px 0px 40px 0" : "75px 0px 50px 0",
          backgroundColor: "#fff",
        }}
      >
        {!skipText && (
          <Box
            sx={{
              maxWidth: isMobile ? "70vw" : "450px",
              width: isMobile ? "70vw" : "100%",
              padding: isMobile ? "30px 35px" : "50px 45px",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              marginBottom={2.5}
              fontSize={isMobile ? 38 : 56}
              color="#000"
              sx={{ textShadow: "none" }}
              fontFamily={"montserrat"}
              fontWeight={500}
            >
              WELCOME!
            </Typography>
            <Typography
              variant="body1"
              fontSize={18}
              color="#000"
              sx={{ textShadow: "none" }}
              fontFamily={"montserrat"}
              fontWeight={500}
            >
              Effectively treat all skin and hair types with Soprano Titanium’s
              all-in-one Trio handpiece that combines three of the most
              clinically validated laser hair removal wavelengths – 755nm, 810nm
              and 1064nm. Combined with Soprano’s one-of-a-kind ICE Plus
              technology, Soprano Titanium™️ allows for a quicker and more
              comfortable hair removal experience that both providers and
              patients will enjoy.
            </Typography>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Banner;
