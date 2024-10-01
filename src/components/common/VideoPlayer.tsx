import React, { useRef, useState, useEffect } from "react";
import { IconButton, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import "../../styles/video.css";
import Header from "./Header";
import UseMedia from "../../hooks/UseMedia";
import "../../styles/vagaro.css";

interface VideoPlayerProps {
  src: string;
  autoPlay?: boolean;
  extra?: string;
  videoOnly?: boolean;
  styles?: Record<string, string>;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  autoPlay = false,
  extra,
  videoOnly = false,
  styles = {},
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
      style={styles}
      onClick={togglePlay}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        className="video"
        controls={false}
        autoPlay={true}
        loop={true}
        playsInline={true}
      >
        <source src={src} type="video/mp4" />
      </video>

      {!videoOnly && <Header />}
      {extra && (
        <Typography
          fontSize={isMobile ? 32 : 56}
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
                padding: "12px",
                borderRadius: "50%",
              }}
              aria-label="play/pause"
            >
              <PlayArrowIcon fontSize={isMobile ? "medium" : "large"} />
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
              <VolumeOffIcon fontSize={isMobile ? "small" : "large"} />
            ) : (
              <VolumeUpIcon fontSize={isMobile ? "small" : "large"} />
            )}
          </IconButton>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
