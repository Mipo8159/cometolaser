import React, { useRef, useState, useEffect } from "react";
import { IconButton, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import "../../styles/video.css";
import Header from "./Header";
import UseMedia from "../../hooks/UseMedia";
import ArrowForwardIcon from "@mui/icons-material/ArrowBackIosNew";
import "../../styles/vagaro.css";

interface VideoPlayerProps {
  src: string;
  autoPlay?: boolean;
  extra?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  autoPlay = false,
  extra,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isMobile } = UseMedia();
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (videoRef.current && autoPlay) {
      videoRef.current.muted = isMuted;
      videoRef.current.play();
    }
  }, [autoPlay, isMuted]);

  return (
    <div
      className="video-container"
      onClick={togglePlay}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        className="video"
        controls={false}
        autoPlay={autoPlay}
      >
        <source src={src} type="video/mp4" />
      </video>

      <Header />
      {extra && (
        <Typography
          fontSize={isMobile ? 32 : 62}
          style={{
            position: "absolute",
            color: "white",
            top: isMobile ? "150px" : "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            width: "700px",
            display: isMobile ? "none" : "block",
            fontFamily: "montserrat",
            fontWeight: "500",
          }}
        >
          {extra}
        </Typography>
      )}

      <a
        href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVBh1+AlsgZbN43U0IWetNqJ2tsFz33AN0AtcX/kaTbKxySdGKTrNIp+tEw+2riuHn9sUKnegykTdg2uWGlD56lYcdT+fezA9y6wRHn6e2Y+ybzJDt7JGI1L5wb+qBN3gR6VDem0UkWUUrHltt8sljDMv+qckAXfnN3rAOjknL20SyU2BoYoC34XG0MDA6uvmnE3oP+Wfxnp58Pp7FDSVmCCdBZsyFC753jlgHYrVoZp78mz2I0IqUiSx7P0QHrpFZ9w6cf6KxLVCIle9JxxgUc1+hFFGhZWLyKOgv0Z9InaLIy8JUq+PMUwmBCrdbgxwJ9t8fSVdyKCD6dVP285mRRtHeq+WtHEb6tdDF3O/ySgFLDL0E/IsEAs6tFJd58RtRgfb1YNGl5nNznxe1XU1/rcPrCu/n56etB75aofTzHdRh/GtyDZk9NYaKSGMkadMPg=="
        target="_blank"
        rel="noopener noreferrer"
        className="vagaro btn-hover vagaro-video"
        style={{
          padding: isMobile ? "10px 12px" : "8px 20px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        Book Now
        {!isMobile && (
          <ArrowForwardIcon
            style={{ transform: "rotate(180deg)", marginLeft: "8px" }}
          />
        )}
      </a>

      {isHovered && (
        <>
          {!isPlaying && (
            <IconButton
              onClick={togglePlay}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "20px",
                borderRadius: "50%",
              }}
              aria-label="play/pause"
            >
              <PlayArrowIcon fontSize="large" />
            </IconButton>
          )}

          <IconButton
            onClick={toggleMute}
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "10px",
              borderRadius: "50%",
            }}
            aria-label="mute/unmute"
          >
            {isMuted ? (
              <VolumeOffIcon fontSize="large" />
            ) : (
              <VolumeUpIcon fontSize="large" />
            )}
          </IconButton>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
