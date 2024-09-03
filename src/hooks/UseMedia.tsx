import useMediaQuery from "@mui/material/useMediaQuery";

const UseMedia = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(min-width:769px) and (max-width:1024px)");

  return { isMobile, isTablet };
};

export default UseMedia;
