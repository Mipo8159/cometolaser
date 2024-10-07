import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useTrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "AW-16681060130", {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

export default useTrackPageView;
